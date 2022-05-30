import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";



function _drawTrips(){
  let trips = ProxyState.trips
  ProxyState.reservations.sort((a,b)=> a.date - b.date)
  let template = ''
  trips.forEach(t => template += t.Template)
  document.getElementById('trips').innerHTML = template
}


export class TripsController{
  constructor(){
    ProxyState.on('trips', _drawTrips)
    ProxyState.on('reservations', _drawTrips)
    ProxyState.on('trips', saveState)
    ProxyState.on('reservations', saveState)
    loadState()
    _drawTrips()
  }


  createTrip(){
    window.event.preventDefault()
    let form = window.event.target
    let tripData = {
      title: form.title.value,
    }
    tripsService.createTrip(tripData)
  }

  updateTrip(id){
    let textarea = window.event.target
    console.log(textarea.value, id);
    tripsService.updateTrip(textarea.value, id)
    Pop.toast('Trip Updated!')
  }

  async deleteTrip(id){
    if(await Pop.confirm('Are you sure?')){
      tripsService.deleteTrip(id)
    }
  }
}
