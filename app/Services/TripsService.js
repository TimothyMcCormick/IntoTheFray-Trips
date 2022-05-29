import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";


class TripsService{
  constructor(){
    console.log('trips service loaded');
    
  }
}


export const tripsService = new TripsService()