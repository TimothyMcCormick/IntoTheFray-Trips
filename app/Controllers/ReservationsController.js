import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js"
import { Pop } from "../Utils/Pop.js";





export class ReservationsController{
  constructor(){
    
  }

  addReservation(tripId){
    window.event.preventDefault()
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
    reservationsService.addReservation(reservationData)
  }

  async deleteReservation(id){
    if(await Pop.confirm('Are you sure?')){
      reservationsService.deleteReservation(id)
    }
  }
}
