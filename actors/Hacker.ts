import { TimedActivity } from "../activities/TimedActivity";
import { IPassenger } from "./IPassenger";

export class Hacker implements IPassenger {
  name = "Hacker";

  get complete(): boolean {
    return this.security === "deactivated";
  }

  security: "noAccess" | "accessed" | "deactivated" = "noAccess";

  hack() {
    return TimedActivity(() => {
      console.log("Security system: access granted");
      this.security = "accessed";
      return true;
    }, 1500);
  }

  disableSecurity() {
    return TimedActivity(() => {
      console.log("Security system disabled");
      this.security = "deactivated";
      return true;
    }, Math.random() * 3000);
  }
}
