import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Trip').Trip[]} */

  trips = [
    new Trip ({name: "General Tripp's Adventure to the Nether-realm"}),
  
  ]


    /** @type {import('./Models/Reservation').Reservation[]} */

    reservations = [
      new Reservation ({type: '🚁', name: 'HeliPad Flights', confirmationNo: 'g9h758', address: '521 Peaches St', date: '06-20-22', cost: 500}),
      new Reservation ({type: '⛵', name: 'Calm Seas', confirmationNo: 'fj75g4', address: '194 French St', date: '06-25-22', cost: 750}),
      new Reservation ({type: '🚙', name: 'Boulder Rollin', confirmationNo: 'dk958f', address: '9786 Carmen Sandiego Ave', date: '06-30-22', cost: 250})
    ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
