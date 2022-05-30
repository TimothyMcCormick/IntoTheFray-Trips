import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";


class TripsService{
  createTrip(tripData){
    ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
  }
  updateTrip(newText, id){
    let trip = ProxyState.trips.find(t => t.id == id)
    console.log('updating trip service', newText, trip);
    trip.notes = newText
    ProxyState.trips = ProxyState.trips
  }
  deleteTrip(id){
    ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
  }
    
  }



export const tripsService = new TripsService()