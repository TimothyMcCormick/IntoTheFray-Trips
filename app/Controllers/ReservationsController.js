import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js"





export class ReservationsController{
  constructor(){

    console.log('reservations controller loaded');
    
  }

  addReservation(tripId){
    window.event.preventDefault()
    console.log('adding reservation', tripId);
    let form = window.event.target
    let reservationData  = {
      tripId: tripId,
      type: form.type.value,
      name: form.name.value,
      confirmationNo: form.confirmationNo.value,
      address: form.address.value,
      date: form.date.value,
      cost: form.cost.value
    }
    console.log(reservationData);
    reservationsService.addReservation(reservationData)
  }
}