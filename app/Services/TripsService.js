import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";


class TripsService{
  createTrip(tripData){
    console.log('creating trip', tripData);
    ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
  }
  deleteTrip(id){
    console.log('delete trip', id);
    ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
  }
    
  }



export const tripsService = new TripsService()