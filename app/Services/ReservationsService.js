import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";




class ReservationsService{
  addReservation(reservationData){
    console.log('add reservation service', reservationData);
    ProxyState.reservations = [...ProxyState.reservations, new Reservation(reservationData)]
  }
}


export const reservationsService = new ReservationsService()