import { TimedActivity } from "../activities/TimedActivity";
import { IPassenger } from "./IPassenger";

export class Driver {

  status: "inPosition" | "travelling" = "travelling";
  passengers: Array<IPassenger> = [];

  prepare() {
    return TimedActivity(() => {
      console.log("Driver in position");
      this.status = "inPosition";
      return true;
    }, 1000);
  }

  load(passenger: IPassenger) {
    console.log(`Passenger ${passenger.name} entered vehicle`);
    this.passengers.push(passenger);
  }

  getaway() {
    return TimedActivity(() => {
      if (!this.passengers.every(p => p.complete)) {
        console.log("Mission incomplete; Escaping regardless.");
        return false;
      }
      console.log(`All ${this.passengers.length} passengers completed mission. Escaping.`);
      return true;
    }, 800);
  }
}