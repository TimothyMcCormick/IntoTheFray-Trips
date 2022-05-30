import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";


class TripsService{
  createTrip(tripData){
    console.log('creating trip', tripData);
    ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
  }
    
  }



export const tripsService = new TripsService()