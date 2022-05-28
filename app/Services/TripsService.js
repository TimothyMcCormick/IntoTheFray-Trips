import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


class TripsService{
  constructor(){
    console.log('hello from the service');
  }
}


export const tripsService = new TripsService()