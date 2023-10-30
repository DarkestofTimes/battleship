import { Ship, Board, Player, Game } from "./game.js";
import { RenderGame } from "./render.js";

const game = Game();
const renderGame = RenderGame(game);
renderGame.initGame();

const battleship = document.querySelectorAll(".battleship");
const cruiser = document.querySelectorAll(".cruiser");
const destroyer = document.querySelectorAll(".destroyer");
const guns = document.querySelectorAll(".BGGun");
const missiles = document.querySelectorAll(".BGMissile");
const batteryGuns = document.querySelectorAll(".BGBattery > .BGGun");
const batteryFireCone = document.querySelectorAll(
  ".BGBattery > .gunFire > .gunFireCone"
);
const batteryFireSmoke = document.querySelectorAll(
  ".BGBattery > .gunFire > .gunFireSmoke"
);

document.addEventListener("click", (ev) => {
  battleship.forEach((ship) => ship.classList.add("moveIn"));
  cruiser.forEach((ship) => ship.classList.add("moveIn"));
  destroyer.forEach((ship) => ship.classList.add("moveIn"));
  setTimeout(() => {
    guns.forEach((gun) => gun.classList.add("rotateGuns"));
    missiles.forEach((missile) => missile.classList.add("armMissiles"));
  }, 2000);
  batteryGuns.forEach((gun) => gun.classList.add("animateGun"));
  batteryFireCone.forEach((cone) => cone.classList.add("animateFireCone"));
  batteryFireSmoke.forEach((Cloud) => Cloud.classList.add("animateFireSmoke"));
  missiles.forEach((missile) => missile.classList.add("animateMissile"));
  setTimeout(() => {
    batteryGuns.forEach((gun) => gun.classList.remove("animateGun"));
    batteryFireCone.forEach((cone) => cone.classList.remove("animateFireCone"));
    batteryFireSmoke.forEach((Cloud) =>
      Cloud.classList.remove("animateFireSmoke")
    );
    missiles.forEach((missile) => missile.classList.remove("animateMissile"));
  }, 2000);
});
