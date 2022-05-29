import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js"



function _drawTrips(){
  let trips = ProxyState.trips
  let template = ''
  trips.forEach(t => template += t.Template)
  document.getElementById('trips').innerHTML = template
}


export class TripsController{
  constructor(){
    console.log('Trips Controller Loaded');
    ProxyState.on('trips', _drawTrips)
    ProxyState.on('reservations', _drawTrips)
    _drawTrips()
  }
}