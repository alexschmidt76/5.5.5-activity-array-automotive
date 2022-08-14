//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this,passenger = 0;
        this.numOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((this.passenger + num) <= this.maxPassengers) {
                return true;
            }
        return false;
        }
    }

    start() {
        if (this.fuel > 0) {
            return true;
        } else {
            return false;
        }
    }

    scheduleService() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }
}
