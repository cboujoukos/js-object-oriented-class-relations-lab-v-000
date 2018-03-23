let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {return trip.driverId === this.id})
  }

  passengers() {
    const passengerIds = []
    this.trips().forEach((trip) => {passengerIds.push(trip.passengerId)});
    return store.passengers.filter(passenger => {return passengerIds.includes(passenger.id) })
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(function(trip) {return trip.passengerId === this.id}.bind(this))
  }
  drivers() {
    const driverIds = []
    this.trips().forEach((trip) => {driverIds.push(trip.driverId)});
    return store.drivers.filter(driver => {return driverIds.includes(driver.id) })
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(function(driver) {return driver.id === this.driverId}.bind(this));
  }
  passenger() {
    return store.passengers.find(function(passenger) {return passenger.id === this.passengerId}.bind(this));
  }

}
