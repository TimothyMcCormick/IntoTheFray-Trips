import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js"




export class Trip{
  constructor(tripData){
    this.id = tripData.id || generateId(),
    console.log(this.id);
    this.name = tripData.name
  }



get Template(){
  return `
  <div class="col-12  border shadow rounded p-2 m-2 bg-dark text-light">
              <h2>${this.name}</h2>
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
  </div>
  `
}


get Reservations(){
  let reservations = ProxyState.reservations
  let template = ''
  reservations.forEach(r => template += r.Template)
  return template
}
}