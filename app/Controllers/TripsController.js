import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";



function _drawTrips(){
  let trips = ProxyState.trips
  let template = ''
  trips.forEach(t => template += t.Template)
  document.getElementById('trips').innerHTML = template
}


export class TripsController{
  constructor(){
    console.log('Trips Controller Loaded',);
    ProxyState.on('trips', _drawTrips)
    ProxyState.on('reservations', _drawTrips)
    ProxyState.on('trips', saveState)
    ProxyState.on('reservations', saveState)
    loadState()
    _drawTrips()
  }


  createTrip(){
    window.event.preventDefault()
    console.log('creating trip');
    let form = window.event.target
    let tripData = {
      title: form.title.value,
    }
    console.log('trip data', tripData);
    tripsService.createTrip(tripData)
  }

  deleteTrip(id){
    tripsService.deleteTrip(id)
  }
}