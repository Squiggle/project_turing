import { TimedActivity } from "../activities/TimedActivity";
import { IPassenger } from "./IPassenger";

export class Team implements IPassenger {
  name = "Team";

  get complete(): boolean {
    return this.explosivesStatus === "planted"
      && this.entryStatus === "entered"
      && this.decoderStatus === "retrieved";
  }

  explosivesStatus: "notReady" | "ready" | "planted" = "notReady";
  entryStatus: "entered" | "notEntered" = "notEntered";
  decoderStatus: "notRetrieved" | "retrieved" = "notRetrieved";

  prepare() {
    return TimedActivity(() => {
      console.log("Explosives ready");
      this.explosivesStatus = "ready";
      return true;
    }, 2000);
  }

  enter() {
    return TimedActivity(() => {
      console.log("Team entered headquarters");
      this.entryStatus = "entered";
      return true;
    }, 1800);
  }

  placeExplosives() {
    if (this.entryStatus !== "entered") throw new Error("Team is not in position");

    return TimedActivity(() => {
      console.log("Explosives planted");
      this.explosivesStatus = "planted";
      return true;
    }, 1200);
  }

  retrieveDecoder() {
    if (this.explosivesStatus !== "planted") throw new Error("Explosives are not planted. Unable to retrieve decoder");

    return TimedActivity(() => {
      console.log("Decoder retrieved");
      this.decoderStatus = "retrieved";
      return true;
    }, 1100);
  }
}