import { Driver } from "./actors/Driver";
import { Hacker } from "./actors/Hacker";
import { Team } from "./actors/Team";

export const simulation = async () => {
  console.log("starting simulation");

  // phase 1: preparation
  const driver = new Driver();
  const hacker = new Hacker();
  const team = new Team();

  await driver.prepare();
  await hacker.hack();
  await team.prepare();

  console.log("================\r\nPhase 1 complete\r\n================");

  // phase 2: the heist
  await hacker.disableSecurity();
  await team.enter();
  await team.placeExplosives();
  // kaboom!
  await team.retrieveDecoder();

  console.log("================\r\nPhase 2 complete\r\n================");

  driver.load(team);
  driver.load(hacker);
  await driver.getaway();

  console.log("================\r\nPhase 3 complete\r\n================");

  console.log("simulation completed");
}