import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js"




export class Trip{
  constructor(tripData){
    this.id = tripData.id || generateId(),
    this.title = tripData.title
    this.notes = tripData.notes
  }



get Template(){
  return `
  <div class="row border shadow rounded p-2 m-2 bg-dark text-light">
              <span class="d-flex justify-content-between"><h2>${this.title}</h2><i onclick="app.tripsController.deleteTrip('${this.id}')" class="px-2 selectable mdi mdi-delete"></i></span>
              <div class="row">
              <div class="col-1">
                <h4>Type</h4>
              </div>
                <div class="col-2">
                  <h4>Name</h4>
                  </div>
                  <div class="col-3">
                    <h4>Confirmation No.</h4>
                  </div>
                    <div class="col-3">
                      <h4>Address</h4>
                      </div>
                      <div class="col-2">
                        <h4>Date</h4>
                        </div>
                        <div class="col-1">
                          <h4>Cost</h4>
                          </div>

                        ${this.Reservations}

                        </div>
                        
                        <form class="p-0" onsubmit="app.reservationsController.addReservation('${this.id}')">
                                        
                                        <div class="col-12 d-flex justify-content-around">
                                        <select required name="type" id="type">
                                          <option value="🚁">🚁</option>
                                          <option value="⛵">⛵</option>
                                          <option value="🚙">🚙</option>
                                        </select>
                                      
                                        <input required type="text" max="50" min="15" name="name" id="name" placeholder="Name" >
                                        <input required type="text" max="10" min="5" name="confirmationNo" id="confirmationNo" placeholder="Confirmation No.">
                                        <input required type="text" name="address" id="address" placeholder="Address">
                                        <input required type="date" name="date" id="date" placeholder="Date">
                                        <input required type="number" name="cost" id="cost" placeholder="Cost">
                                      </div>
                                        <div class="col-12 d-flex justify-content-end">

                                          <button class="btn btn-light text-dark m-2" title="add reservation">Reserve</button>
                                        </div>
                                      </form>
                                      <div class="row">
                                        <div class="col-md-4">
                                          <h5>Notes</h5>
                                            <textarea cols="50" onblur="app.tripsController.updateTrip('${this.id}')" class="border-0">${this.notes}</textarea>
                                        </div>
                                      </div>
                                      <h3 class="text-end">Total : $${this.Total}</h3>
                                      
                                      </div>
                        </div>
  
  `
}


get Reservations(){
  let reservations = ProxyState.reservations.filter(r => r.tripId == this.id)
  let template = ''
  reservations.forEach(r => template += r.Template)
  return template
}

get Total(){
  let reservations = ProxyState.reservations.filter(t => t.tripId == this.id)
  let subTotal = 0
  reservations.forEach(t => subTotal += parseInt(t.cost))
  return subTotal
}
}