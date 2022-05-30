import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class Reservation{
  constructor(data){
    this.id = data.id || generateId()
    this.tripId = data.tripId
    console.log(this.tripId);
    this.type = data.type
    this.name = data.name
    this.confirmationNo = data.confirmationNo
    this.address = data.address
    this.date = data.date
    this.cost = data.cost
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
              <span class="d-flex justify-content-between"><h5>${this.cost}</h5><i onclick="app.reservationsController.deleteReservation('${this.id}')" class="selectable mdi mdi-delete"></i></span>
              </div>
              
            </div>
            </div>
    `
  }
}