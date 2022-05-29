import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class Reservation{
  constructor(reservationData){
    this.id = reservationData.id || generateId()
    this.tripId = reservationData.tripId
    console.log(this.tripId);
    this.type = reservationData.type
    this.name = reservationData.name
    this.confirmationNo = reservationData.confirmationNo
    this.address = reservationData.address
    this.date = reservationData.date
    this.cost = reservationData.cost
  }




  get Template(){
    return`
    <div class="col-md-12 border shadow rounded p-2 m-2 bg-light text-dark">
  <div class="row">
  <div class="col-1">
    <h5>${this.type}</h5>
    </div>
    <div class="col-2">
      <h5>${this.name}</h5>
      </div>
      <div class="col-3">
        <h5>${this.confirmationNo}</h5>
        </div>
        <div class="col-3">
          <h5>${this.address}</h5>
          </div>
          <div class="col-2">
            <h5>${this.date}</h5>
            </div>
            <div class="col-1">
              <h5>${this.cost}</h5>
              </div>
            </div>
            </div>
    `
  }
}