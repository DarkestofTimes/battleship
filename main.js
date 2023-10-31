/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

/* CELL */

.cell {
  width: clamp(1.8rem, 6vw, 2.5rem);
  height: clamp(1.8rem, 6vw, 2.5rem);
  border: 1px solid black;
  font-size: 1.8rem;
  font-weight: bold;
  display: grid;
  place-content: center;
}

.cell:hover {
  transform: scale(1.15);
}

.cell:active {
  position: relative;
  transform: scale(1);
  border: 1px solid yellow;
  z-index: 1;
}

.cellCan {
  position: relative;
  transform: scale(1.15);
  border: 2px solid green;
  background-color: green;
  z-index: 1;
}

.cellCannot {
  position: relative;
  transform: scale(1.15);
  border: 2px solid red;
  background-color: red;
  z-index: 1;
}

/* SHIP */

.ship4 {
  width: clamp(7.2rem, 24vw, 10rem);
  height: clamp(1.8rem, 6vw, 2.5rem);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
}

.ship3 {
  width: clamp(5.4rem, 18vw, 7.5rem);
  height: clamp(1.4rem, 5vw, 2.3rem);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
}

.ship2 {
  width: clamp(3.6rem, 12vw, 5rem);
  height: clamp(1.2rem, 4vw, 1.9rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.shipCreate {
  background-color: hsla(0, 0%, 100%, 0.82);
  border: 2px solid black;
  border-radius: 100%;
}

.ship4.vertical {
  transform-origin: 12.5%;
}
.ship3.vertical {
  transform-origin: 16.7%;
}
.ship2.vertical {
  transform-origin: 25%;
}

.vertical {
  position: absolute;
  transform: rotate(90deg);
  pointer-events: none;
  background-color: hsla(0, 0%, 100%, 0.82);
}
.horizontal {
  position: absolute;
  pointer-events: none;
  background-color: hsla(0, 0%, 100%, 0.82);
}

.ship {
  display: grid;
  align-self: center;
  pointer-events: none;
  border: 2px solid black;
  border-radius: 100%;
}

.sunk {
  background-color: hsla(0, 0%, 0%, 0.269);
}

.bridge {
  width: 70%;
  height: 60%;
  border: 2px solid black;
  pointer-events: none;
}

.battery {
  position: relative;
  width: 80%;
  height: 60%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  pointer-events: none;
  /* background-color: inherit; */
}
.battery:last-child {
  transform: rotate(180deg);
}
.turret {
  background-color: inherit;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 45%;
  border: 1px solid black;
  border-radius: 50%;
  grid-column: 2;
  grid-row: 1 / -1;
  transform: scale(2.1);
}
.shipCreate .turret {
  background-color: white;
}
.ship .turret {
  background-color: white;
}
.ship.sunk .turret {
  background-color: black;
}

.gun {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 45%;

  background-color: black;
}
.missileRack {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.05rem;
  pointer-events: none;
}
.missile {
  border: 1px solid black;
  height: 50%;
  width: 100%;
  border-radius: 50%;
  transform: rotate(15deg);
}
.missile:nth-child(4),
.missile:nth-child(5),
.missile:nth-child(6) {
  grid-row: 3;
  transform: rotate(345deg);
}

/* START */

.fleetCreationScreen {
  width: 100%;
  height: 100vh;
  padding: 1rem;
  top: 0;
  transition: transform 1.3s ease;
  transform: translateY(0%);
  position: absolute;
}

.fleetCreationScreen .shipContainerWrapper {
  height: 22vh;
  width: clamp(300px, 70%, 700px);
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1rem;
}

.fleetCreationScreen .shipsContainer {
  display: grid;
  margin-right: auto;
  place-items: center;
  margin-right: auto;
}

.fleetCreationScreen .shipContainerCount {
  margin-left: auto;
  width: 12rem;
  display: inline;
  font-size: 1.6rem;
}

.fleetCreationScreen .gridContainer {
  width: min-content;
  height: min-content;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid black;
}

.fleetCreationScreen .grid {
  width: clamp(18rem, 60vw, 25rem);
  height: clamp(18rem, 60vw, 25rem);
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-color: hsla(123, 84%, 45%, 0.171);
}

.textOutput {
  text-align: center;
  height: 4rem;
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
}

/* GAME */

.gamePlayScreen {
  position: absolute;
  display: none;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  transition: transform 1.3s ease;
  transform: translateY(100%);
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
  column-gap: 3rem;
}

.gamePlayScreen .computerBoard,
.gamePlayScreen .playerBoard {
  width: min-content;
  height: min-content;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid black;
}

.gamePlayScreen .computerGrid,
.gamePlayScreen .playerGrid {
  width: clamp(18rem, 60vw, 25rem);
  height: clamp(18rem, 60vw, 25rem);
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.boardWrapper {
  transition: transform 0.5s ease; /* set to 0.5 to have animation */
  transform: translateY(0);
  margin-top: 2rem;
}

.playerGrid .cell {
  background-color: hsla(123, 84%, 45%, 0.155);
}

.computerGrid .cell {
  background-color: hsla(7, 84%, 45%, 0.169);
}

.computerSunken,
.playerSunken,
.computerSunkenOver,
.playerSunkenOver {
  margin: 0.5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.turnAnnouncement,
.turnAnnouncementOver {
  position: absolute;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}

/* OVER */

.gameOverScreen {
  position: absolute;
  display: none;
  height: 100vh;
  width: 100%;
  padding: 1rem;
  transition: transform 1.3s ease;
  transform: translateY(-110%);
}

.gameOverScreen .ship4 {
  width: clamp(4.8rem, 24vw, 7.6rem);
  height: clamp(1.2rem, 6vw, 1.9rem);
}
.gameOverScreen .ship3 {
  width: clamp(3.6rem, 18vw, 5.7rem);
  height: clamp(1.2rem, 6vw, 1.9rem);
}
.gameOverScreen .ship2 {
  width: clamp(2.4rem, 12vw, 3.8rem);
  height: clamp(1.2rem, 6vw, 1.9rem);
}

.overWrapper {
  width: clamp(300px, 70%, 900px);
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.computerBoardOver,
.playerBoardOver {
  width: min-content;
  height: min-content;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid black;
}

.computerGridOver,
.playerGridOver {
  width: clamp(12rem, 60vw, 19rem);
  height: clamp(12rem, 60vw, 19rem);
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.playerBoardOver .cell {
  width: clamp(1.2rem, 6vw, 1.9rem);
  height: clamp(1.2rem, 6vw, 1.9rem);
  background-color: hsla(123, 84%, 45%, 0.263);
}

.computerBoardOver .cell {
  width: clamp(1.2rem, 6vw, 1.9rem);
  height: clamp(1.2rem, 6vw, 1.9rem);
  background-color: hsla(7, 84%, 45%, 0.267);
}

.gridCover {
  position: absolute;
  width: clamp(12rem, 60vw, 19rem);
  height: clamp(12rem, 60vw, 19rem);
  background-color: rgba(0, 0, 0, 0.324);
  display: grid;
  place-content: center;
}

.computerSunkenOver,
.playerSunkenOver {
  color: white;
  font-size: 4rem;
}

.winner {
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
}

.buttonWrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 1rem;
}

.restartBtn {
  font-weight: bold;
  font-size: 2rem;
  background-color: hsla(270, 50%, 40%, 0.208);
  border: 2px solid black;
  padding: 0.2rem;
  margin: 0.2rem;
  margin-right: auto;
}
.restartBtn:hover {
  background-color: aliceblue;
}

.restartBtn:active {
  background-color: black;
  color: aliceblue;
}

.turnAnnouncementOver {
  margin-left: auto;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.footerLink:any-link {
  color: white;
}
.footerLink:hover {
  color: black;
}

/* BACKGROUND */

/* background util */

.moveIn {
  animation: fleetAsync 10s linear infinite, moveIn 2s ease-out 1;
}

.BGSink {
  animation: sinkShip 10s linear;
}
.computerFleet .BGSink {
  animation: CompSinkShip 15s ease-in;
}
.BGSink .wave,
.BGSink .trail {
  transition: scale 5s ease-in;
  scale: 1 0;
}

.destroyed {
  display: none;
}

.detonating .hitExplosion {
  scale: 1.8;
}
.computerFleet .detonating .hitExplosion {
  scale: 0.7;
}

.computerFleet .burning {
  scale: 0.3;
}

@keyframes sinkShip {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-150vw);
  }
}
@keyframes CompSinkShip {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-150vw);
  }
}

.backgroundScreen {
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100vh;
  background: linear-gradient(hsl(214, 66%, 77%) 20%, rgb(89, 89, 122));
  pointer-events: none;
  overflow: hidden;
}
.sea {
  height: 50vh;
  width: 100%;
  position: absolute;
  z-index: -9;
  top: 50%;
  background: linear-gradient(hsl(192, 18%, 48%), rgb(27, 61, 66));
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.iceBerg {
  position: absolute;
  z-index: -11;
  opacity: 0.99;
  width: clamp(10vh, 10vw, 10vw);
  height: clamp(8vh, 8vw, 8vw);
  background: linear-gradient(white, rgb(194, 194, 194));
  top: 50%;
  transform: translateY(-100%) translateX(-100%);
  animation: iceFloatBy 18s linear infinite;
  animation-play-state: paused;
}
.iceBergOne {
  border-left: clamp(5vh, 5vw, 5vw) solid transparent;
  border-right: clamp(7vh, 7vw, 7vw) solid transparent;
  border-bottom: clamp(10vh, 10vw, 10vw) solid rgb(225, 225, 225);
}
.iceBergTwo {
  animation-delay: 2s;
  border-left: clamp(8vh, 8vw, 8vw) solid transparent;
  border-right: clamp(7vh, 7vw, 7vw) solid transparent;
  border-bottom: clamp(6vh, 6vw, 6vw) solid rgb(225, 225, 225);
}
.iceBergThree {
  animation-delay: 2.5s;
  border-left: clamp(9vh, 9vw, 9vw) solid transparent;
  border-right: clamp(6vh, 6vw, 6vw) solid transparent;
  border-bottom: clamp(9vh, 9vw, 9vw) solid rgb(225, 225, 225);
}
.iceBergFour {
  animation-delay: 10s;
  border-left: clamp(6vh, 6vw, 6vw) solid transparent;
  border-right: clamp(6vh, 6vw, 6vw) solid transparent;
  border-bottom: clamp(8.2vh, 8.2vw, 8.2vw) solid rgb(225, 225, 225);
}
.iceBergFive {
  animation-delay: 11s;
  border-left: clamp(12vh, 12vw, 12vw) solid transparent;
  border-right: clamp(12vh, 12vw, 12vw) solid transparent;
  border-bottom: clamp(10vh, 10vw, 10vw) solid rgb(225, 225, 225);
}
.iceBergSix {
  animation-delay: 12s;
  border-left: clamp(5vh, 5vw, 5vw) solid transparent;
  border-right: clamp(12vh, 12vw, 12vw) solid transparent;
  border-bottom: clamp(15vh, 15vw, 15vw) solid rgb(225, 225, 225);
}
.iceBergSeven {
  animation-delay: 6.5s;
  border-left: clamp(12vh, 12vw, 12vw) solid transparent;
  border-right: clamp(15vh, 15vw, 15vw) solid transparent;
  border-bottom: clamp(3vh, 3vw, 3vw) solid rgb(225, 225, 225);
}
.animateIce {
  animation-play-state: running;
}

@keyframes iceFloatBy {
  0% {
    transform: translateX(100vw) translateY(-100%);
  }
  100% {
    transform: translateX(-20vw) translateY(-100%);
  }
}

.playerFleet {
  position: relative;
  z-index: 1;
  grid-row: 2;
}
.computerFleet {
  z-index: 1;
  position: relative;
  grid-row: 1;
}
.computerFleet > span {
  scale: 0.3;
}

/* background ships */

.computerFleet .battleship {
  width: clamp(10vh, 10vw, 10vw);
  height: clamp(1.7vh, 1.7vw, 1.7vw);
  top: 0%;
  left: 50%;
}
.computerFleet .cruiser {
  width: clamp(7vh, 7vw, 7vw);
  height: clamp(1.2vh, 1.2vw, 1.2vw);
  top: 15%;
  left: 40%;
}
.computerFleet .cruiser:nth-of-type(2) {
  top: 15%;
  left: 60%;
}
.computerFleet .destroyer {
  width: clamp(4.4vh, 4.4vw, 4.4vw);
  height: clamp(0.9vh, 0.9vw, 0.9vw);
}
.computerFleet .destroyer:nth-of-type(4) {
  top: 27%;
  left: 33%;
}
.computerFleet .destroyer:nth-of-type(5) {
  top: 30%;
  left: 55%;
}
.computerFleet .destroyer:nth-of-type(6) {
  top: 25%;
  left: 67%;
}
.computerFleet .BGGun {
  z-index: 5;
}
.battleship {
  position: absolute;
  z-index: 3;
  width: clamp(35vh, 35vw, 35vw);
  height: clamp(5vh, 5vw, 5vw);
  top: 33%;
  left: 50%;
  transform: translateX(-120vw);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr 3fr;
  transition: transform 2s ease-out;
}
.cruiser {
  position: absolute;
  z-index: 2;
  width: clamp(18vh, 18vw, 18vw);
  height: clamp(3.2vh, 3.2vw, 3.2vw);
  top: 23%;
  left: 22%;
  transform: translateX(-120vw);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr 3fr;
  transition: transform 2s ease-out;
}
.cruiser:nth-of-type(2) {
  left: 78%;
}
.destroyer {
  z-index: 1;
  position: absolute;
  width: clamp(10vh, 10vw, 10vw);
  height: clamp(2vh, 2vw, 2vw);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr 3fr;
  transition: transform 2s ease;
  transform: translateX(-120vw);
}

.playerFleet .destroyer:nth-of-type(4) {
  top: 59%;
  left: 90%;
}
.playerFleet .destroyer:nth-of-type(5) {
  top: 63%;
  left: 10%;
}
.playerFleet .destroyer:nth-of-type(6) {
  top: 5%;
  left: 90%;
}

/* background parts */

.body {
  position: relative;
  z-index: 2;
  grid-column: 1 / -1;
  grid-row: 2/ -1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 2fr;
}

.end {
  background: linear-gradient(rgb(78, 78, 78), rgb(50, 50, 50));
  clip-path: polygon(0 10%, 100% 100%, 100% 15%, 0 0);
}
.center {
  position: relative;
  left: -0.5%;
  width: 101.2%;
  background: linear-gradient(rgb(78, 78, 78), rgb(50, 50, 50));
  clip-path: polygon(0 15%, 0 100%, 100% 100%, 100% 15%);
}

.start {
  background: linear-gradient(rgb(78, 78, 78), rgb(50, 50, 50));
  clip-path: polygon(0 15%, 100% 0, 100% 10%, 0 100%);
}

.bodyBorder {
  z-index: 1;
  position: absolute;
  width: 101.5%;
  height: 64%;
  display: grid;
  grid-template-columns: 1fr 6fr 2fr;
  top: 38%;
  left: -0.5%;
}

.endBorder {
  background: black;
  clip-path: polygon(0 10%, 100% 100%, 100% 15%, 0 0);
}
.centerBorder {
  background: black;
  clip-path: polygon(0 15%, 0 100%, 100% 100%, 100% 15%);
}
.startBorder {
  background: black;
  clip-path: polygon(0 15%, 100% 0, 100% 10%, 0 100%);
}

.BGBridge {
  position: relative;
  width: 80%;
  height: 100%;
  background: linear-gradient(rgb(116, 116, 116), rgb(71, 71, 71) 90%, black);
  top: 24%;
  left: -10%;
  border: 2px solid black;
  border-radius: 20px 50% 0 0;
}
.cruiser .BGBridge {
  width: 70%;
  top: 20%;
  border-radius: 20px 100% 0 0;
}
.destroyer .BGBridge {
  width: 70%;
  height: 60%;
  top: 60%;
  left: 30%;
  border-radius: 100px 100% 0 0;
}
.BGAntennae {
  position: relative;
  width: 40%;
  height: 80%;
  background: linear-gradient(rgb(172, 172, 172), rgb(83, 83, 83));
  top: -80%;
  left: 20%;
  border: 2px solid black;
  border-radius: 50% 100px 0 0;
}

.BGMissileRack {
  position: relative;
  width: 70%;
  height: 50%;
  top: 95%;
}
.BGMissile {
  position: absolute;
  width: 50%;
  height: 20%;
  top: 30%;
  background-color: black;
  border-radius: 50%;
  transition: transform 1s ease;
}
.BGMissile::after {
  opacity: 0;
  position: absolute;
  content: "";
  width: 100%;
  height: 300%;
  top: -80%;
  background: radial-gradient(black 20%, yellow 60%);
  border-radius: 50%;
  left: -70%;
}
.BGMissile::before {
  content: "";
  position: absolute;
  opacity: 0;
  width: 30%;
  height: 500%;
  border-radius: 50%;
  background-color: black;
}

.animateMissile.BGMissile::after {
  opacity: 1;
}
.animateMissile.BGMissile::before {
  animation: missileSmoke 2s linear;
}
.animateMissile {
  animation: launchMissile 2s linear;
}
.BGMissile:nth-of-type(2) {
  left: 20%;
}
.BGMissile:nth-of-type(3) {
  left: 40%;
}

@keyframes missileSmoke {
  0% {
    transform: scale(3);
    opacity: 1;
  }
  30% {
    transform: scale(3) translateX(-100%);
  }
  70% {
    transform: scale(3) translateY(-350%) translateX(-14vh);
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: scale(5) translateY(-400%) translateX(-15vh);
    opacity: 0;
  }
}

@keyframes launchMissile {
  0% {
    transform: rotate(-90deg);
  }
  30% {
    transform: rotate(-90deg) translateX(200%);
  }
  100% {
    transform: rotate(-90deg) translateX(100vh);
  }
}

.armMissiles {
  transform: rotate(-90deg);
}

.BGBattery {
  position: relative;
}
.BGBattery:nth-of-type(1) {
  left: -20%;
}
.BGBattery:nth-of-type(3) {
  transform: scaleX(-1);
}
.BGBattery:nth-of-type(4) {
  transform: scaleX(-1);
  right: 30%;
}
.BGTurret {
  position: absolute;
  z-index: 4;
  width: 40%;
  height: 70%;
  top: 55%;
  left: 65%;
  border-radius: 30% 30% 0 0;
  background: linear-gradient(rgb(96, 96, 96), rgb(77, 77, 77) 90%, black);
  border: 2px solid black;
}
.BGGun {
  position: absolute;
  z-index: 3;
  width: 40%;
  height: 20%;
  border-radius: 20%;
  border: 2px solid black;
  top: 85%;
  left: 32%;
  background-color: rgb(79, 79, 79);
  transform-origin: 100% 100%;
  transform: rotate(15deg);
  transition: transform 1s ease;
  /*  animation-delay: 2s; */ /* clean this up */
}

.animateGun {
  animation: gunRecoil 1s ease-out;
}
@keyframes gunRecoil {
  0% {
    translate: 0 0;
  }
  20% {
    translate: 0 100%;
  }
  100% {
    translate: 0 0;
  }
}

.BGGun:nth-child(2) {
  transform: rotate(25deg);
}
.BGGun:nth-child(3) {
  transform: rotate(20deg);
}

.rotateGuns {
  transform: rotateZ(90deg) scaleX(0.7);
}
.rotateGuns:nth-child(2) {
  transform: rotateZ(90deg) scaleX(0.7);
  left: 42%;
}
.rotateGuns:nth-child(3) {
  transform: rotateZ(90deg) scaleX(0.7);
  left: 52%;
}

.wave {
  position: absolute;
  z-index: 5;
  width: 30%;
  height: 60%;
  top: 79%;
  left: 55%;
  border-radius: 100% 50% 0 0;
  background: linear-gradient(hsl(191, 30%, 68%) 40%, transparent 50%);
  animation: waveRide 3s ease-in-out infinite;
}
.battleship .wave .trail {
  animation: waveRide 5s ease-in-out infinite;
  animation-delay: 2s;
}
.battleship:nth-of-type(2) .wave {
  animation-delay: 1s;
}
.cruiser .wave .trail {
  animation: waveRide 4s ease-in-out infinite;
  animation-delay: 5s;
}
.cruiser:nth-of-type(2) .wave .trail {
  animation-delay: 8s;
}
.cruiser:nth-of-type(3) .wave .trail {
  animation-delay: 3.7s;
}
.cruiser:nth-of-type(4) .wave .trail {
  animation-delay: 7s;
}
.destroyer .wave .trail {
  animation-delay: 4s;
}
.destroyer:nth-of-type(2) .wave .trail {
  animation-delay: 1.8s;
}
.destroyer:nth-of-type(3) .wave .trail {
  animation-delay: 8.8s;
}
.destroyer:nth-of-type(4) .wave .trail {
  animation-delay: 5.3s;
}
.destroyer:nth-of-type(5) .wave .trail {
  animation-delay: 2.2s;
}
.destroyer:nth-of-type(6) .wave .trail {
  animation-delay: 4.6s;
}

.trail {
  position: absolute;
  z-index: 5;
  background: linear-gradient(-90deg, hsl(191, 30%, 68%) 40%, transparent 50%);
  width: 200%;
  height: 16%;
  top: 88%;
  left: -130%;
  transform-origin: 120% 50%;
  animation: trailAnimation 6s ease-in-out infinite;
}

@keyframes waveRide {
  0% {
    transform: translateX(-2%) scale(1.05);
  }
  25% {
    transform: translateX(6%) scale(0.9);
  }
  50% {
    transform: translateX(-4%) scale(1.1);
  }
  75% {
    transform: translateX(4%) scale(0.9);
  }
  100% {
    transform: translateX(-2%) scale(1.05);
  }
}

@keyframes fleetAsync {
  0% {
    transform: translate(0%, 0%) translateX(-50%);
  }
  25% {
    transform: translate(5%, 3%) translateX(-50%);
  }
  50% {
    transform: translate(-5%, -2%) translateX(-50%);
  }
  75% {
    transform: translate(2%, 4%) translateX(-50%);
  }
  100% {
    transform: translate(0%, 0%) translateX(-50%);
  }
}
@keyframes trailAnimation {
  0% {
    transform: translateY(0%) scale(1);
  }
  25% {
    transform: translateY(10%) scale(1.1);
  }
  50% {
    transform: translateY(-5%) scale(0.92);
  }
  75% {
    transform: translateY(8%) scale(1.05);
  }
  75% {
    transform: translateY(0) scale(1);
  }
}

@keyframes moveIn {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(-50%) translate(4%, 2%);
  }
}

/*  EFFECTS */

.hitExplosion {
  z-index: 6;
  position: absolute;
  top: 50%; /* 10 - 55 */
  left: 15%; /* 15 - 70 */
}
.explosion {
  z-index: 10;
  position: absolute;
  background: radial-gradient(rgb(213, 220, 109) 60%, transparent 70%);
  width: clamp(1vh, 1vw, 1vw);
  height: clamp(1vh, 1vw, 1vw);
  animation: hitExplosion 0.6s ease-out 1;
  /* animation-delay: 2s; */ /* clean this up */
  border-radius: 50%;
  display: flex;
  place-items: center;
  opacity: 0; /* change to 0 */
}
.explInner {
  background: radial-gradient(rgb(38, 38, 28) 30%, transparent 40%);
  width: clamp(1vh, 1vw, 1vw);
  height: clamp(1vh, 1vw, 1vw);
}
.explSmoke {
  position: absolute;
  opacity: 0; /* change to 0 */
  z-index: 2;
  width: clamp(3vh, 3vw, 3vw);
  height: clamp(3vh, 3vw, 3vw);
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.621);
  animation: explSmoke 3s ease-out;
  /* animation-delay: 2s; */ /* clean this up */
  transform-origin: -50% -50%;
  translate: -35% -35%;
}
.computerFleet .hitExplosion {
  scale: 0.3;
}

@keyframes explSmoke {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.8) translateY(-200%) translateX(-300%);
  }
}

@keyframes hitExplosion {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(6);
    opacity: 1;
  }

  100% {
    transform: scale(8);
    opacity: 0;
  }
}

.burning {
  position: absolute;
  z-index: 0;
  width: clamp(1vh, 1vw, 1vw);
  height: clamp(0.7vh, 0.7vw, 0.7vw);
  background: linear-gradient(45deg, red 60%, transparent);
  top: -45%;
  left: 18%; /* 18 - 75 */
  border-radius: 50% 0% 50% 50%;
  display: flex;
  place-items: center;
  animation: burning 3s linear infinite;
  opacity: 0.8;
}
.brnInner {
  position: absolute;
  left: 10%;
  width: 60%;
  height: 80%;
  background: linear-gradient(45deg, rgb(212, 174, 50) 60%, transparent);
  border-radius: 50% 0% 50% 50%;
}
.burning::before {
  opacity: 0;
  position: absolute;
  content: "";
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.596);
  animation: burnSmoke 1.2s ease-out infinite;
  border-radius: 50%;
  rotate: 45deg;
  transform-origin: 100% 100%;
}
.burning::after {
  opacity: 0;
  position: absolute;
  content: "";
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.596);
  animation: burnSmoke 1.2s ease-out infinite;
  animation-delay: 0.3s;
  border-radius: 50%;
  rotate: 45deg;
  transform-origin: 100% 100%;
}
.brnInner::before {
  opacity: 0;
  position: absolute;
  content: "";
  width: 75%;
  height: 75%;
  background-color: rgba(0, 0, 0, 0.596);
  animation: burnSmoke 1.2s ease-out infinite;
  animation-delay: 0.6s;
  border-radius: 50%;
  rotate: 45deg;
  transform-origin: 100% 100%;
}
.brnInner::after {
  opacity: 0;
  position: absolute;
  content: "";
  width: 75%;
  height: 75%;
  background-color: rgba(0, 0, 0, 0.596);
  animation: burnSmoke 1.2s ease-out infinite;
  animation-delay: 0.9s;
  border-radius: 50%;
  rotate: 45deg;
  transform-origin: 100% 100%;
}
.playerFleet .battleship .burning {
  scale: 1.2;
  top: -25%;
}
.playerFleet .destroyer .burning {
  scale: 0.8;
  top: -70%;
}

@keyframes burning {
  0% {
    transform: skewX(30deg) scale(4) rotate(-45deg);
  }
  25% {
    transform: scale(4.4) skewX(-8deg) rotate(-45deg);
  }
  50% {
    transform: scale(3.5) skewX(30deg) rotate(-45deg);
  }
  75% {
    transform: scale(4.5) skewX(-12deg) rotate(-45deg);
  }
  100% {
    transform: scale(4) skewX(30deg) rotate(-45deg);
  }
}
@keyframes burnSmoke {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1.8) translateY(-100%) translateX(-70%);
  }
}

.hole {
  position: absolute;
  z-index: 5;
  top: 55% /* 0 - 20*/;
  left: 45% /* 12 - 70*/;
  border-radius: 50%;
  width: clamp(1.5vh, 1.5vw, 1.5vw);
  height: clamp(1.5vh, 1.5vw, 1.5vw);
  background: radial-gradient(black 10%, rgba(0, 0, 0, 0.071) 50%);
}
.computerFleet .hole {
  scale: 0.3;
}

.splash {
  opacity: 0;
  position: absolute;
  z-index: -1;
  top: 30%; /* -50 - 30% */
  left: 43%; /*0 -  100 */
  z-index: 2;
  width: clamp(2vh, 2vw, 2vw);
  height: clamp(8vh, 8vw, 8vw);
  background: linear-gradient(45deg, hsl(191, 30%, 68%) 15%, transparent 20%);
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  animation: splash 1s ease-out 1;
}
.splashInner {
  opacity: 0.9;
  position: absolute;
  z-index: 1;
  width: clamp(2vh, 2vw, 2vw);
  height: clamp(2vh, 2vw, 2vw);
  background: radial-gradient(hsl(192, 18%, 48%), hsl(191, 30%, 68%));
  border-radius: 50%;
  transform: rotate3d(1, 1, 0, 55deg);
  top: 87%;
  left: -45%;
}

@keyframes splash {
  0% {
    transform: scale(0) rotate(-45deg);
    opacity: 0.99;
  }

  100% {
    transform: scale(2) rotate(-45deg);
    opacity: 0;
  }
}

.gunFire {
  position: absolute;
  z-index: 5;
  width: 40%;
  height: 100%;
  rotate: 90deg;
  left: 54%;
  top: -170%;
}
.gunFire:nth-of-type(2) {
  left: 64%;
}
.gunFire:nth-of-type(3) {
  left: 74%;
}
.gunFireCone {
  opacity: 0; /* change to 0 */
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(black 20%, yellow 30%);
  border-radius: 50%;
  transform-origin: 100%;
  /* animation-delay: 2s;  */ /* clean this up */
}
.animateFireCone {
  animation: FireCone 0.3s ease-out;
}

.gunFireSmoke {
  position: absolute;
  opacity: 0; /* change to 0 */
  z-index: 2;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.621);
  left: 70%;
  top: 30%;
  /*  animation-delay: 2s; */ /* clean this up */
}
.animateFireSmoke {
  animation: gunSmoke 2s ease-out;
}

.BGBattery:nth-of-type(3) .gunFire {
  transform: scaleY(-1);
}
.BGBattery:nth-of-type(4) .gunFire {
  transform: scaleY(-1);
}

@keyframes gunSmoke {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
    transform: scale(2) translateY(0) translateX(-50%);
  }
  100% {
    opacity: 0;
    transform: scale(3) translateY(200%) translateX(-150%);
  }
}

@keyframes FireCone {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}

/* UTIL */

.slideUp {
  position: absolute;
  transform: translateY(-100%);
}

.slideFromBeneath {
  position: absolute;
  transform: translateY(0);
}
.slideDown {
  position: absolute;
  transform: translateY(0);
}

.slideToMid {
  transform: translateY(/* -106.5% */ /* -116.5% */ -107.5%);
}

.slideFromMid {
  transform: translateY(/* 106.5% */ /*  116.5% */ 107.5%);
}

.highlight {
  box-shadow: 0 0 5px 5px rebeccapurple;
}

.selected {
  background-color: cadetblue;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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D;EACzD;EACA;IACE,UAAU;EACZ;EACA;IACE,uDAAuD;IACvD,UAAU;EACZ;AACF;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,2CAA2C;EAC7C;AACF;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,UAAU;AACZ;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;EACrB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,QAAQ;EACR,SAAS;EACT,0BAA0B;EAC1B,wEAAwE;EACxE,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,uBAAuB;EACvB,QAAQ;EACR,SAAS;EACT,iCAAiC;EACjC,2BAA2B;EAC3B,wBAAwB;EACxB,6BAA6B;EAC7B,0BAA0B,EAAE,kBAAkB;AAChD;;AAEA;EACE,gCAAgC;AAClC;AACA;EACE;IACE,cAAc;EAChB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,cAAc;EAChB;AACF;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;AACvC;AACA;EACE,qCAAqC;EACrC,SAAS;AACX;AACA;EACE,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,QAAQ;EACR,SAAS;EACT,2BAA2B;EAC3B,oEAAoE;EACpE,2CAA2C;AAC7C;AACA;EACE,2CAA2C;EAC3C,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,2CAA2C;EAC3C,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAA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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n/* CELL */\r\n\r\n.cell {\r\n  width: clamp(1.8rem, 6vw, 2.5rem);\r\n  height: clamp(1.8rem, 6vw, 2.5rem);\r\n  border: 1px solid black;\r\n  font-size: 1.8rem;\r\n  font-weight: bold;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.cell:hover {\r\n  transform: scale(1.15);\r\n}\r\n\r\n.cell:active {\r\n  position: relative;\r\n  transform: scale(1);\r\n  border: 1px solid yellow;\r\n  z-index: 1;\r\n}\r\n\r\n.cellCan {\r\n  position: relative;\r\n  transform: scale(1.15);\r\n  border: 2px solid green;\r\n  background-color: green;\r\n  z-index: 1;\r\n}\r\n\r\n.cellCannot {\r\n  position: relative;\r\n  transform: scale(1.15);\r\n  border: 2px solid red;\r\n  background-color: red;\r\n  z-index: 1;\r\n}\r\n\r\n/* SHIP */\r\n\r\n.ship4 {\r\n  width: clamp(7.2rem, 24vw, 10rem);\r\n  height: clamp(1.8rem, 6vw, 2.5rem);\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  align-items: center;\r\n}\r\n\r\n.ship3 {\r\n  width: clamp(5.4rem, 18vw, 7.5rem);\r\n  height: clamp(1.4rem, 5vw, 2.3rem);\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  align-items: center;\r\n}\r\n\r\n.ship2 {\r\n  width: clamp(3.6rem, 12vw, 5rem);\r\n  height: clamp(1.2rem, 4vw, 1.9rem);\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  align-items: center;\r\n}\r\n\r\n.shipCreate {\r\n  background-color: hsla(0, 0%, 100%, 0.82);\r\n  border: 2px solid black;\r\n  border-radius: 100%;\r\n}\r\n\r\n.ship4.vertical {\r\n  transform-origin: 12.5%;\r\n}\r\n.ship3.vertical {\r\n  transform-origin: 16.7%;\r\n}\r\n.ship2.vertical {\r\n  transform-origin: 25%;\r\n}\r\n\r\n.vertical {\r\n  position: absolute;\r\n  transform: rotate(90deg);\r\n  pointer-events: none;\r\n  background-color: hsla(0, 0%, 100%, 0.82);\r\n}\r\n.horizontal {\r\n  position: absolute;\r\n  pointer-events: none;\r\n  background-color: hsla(0, 0%, 100%, 0.82);\r\n}\r\n\r\n.ship {\r\n  display: grid;\r\n  align-self: center;\r\n  pointer-events: none;\r\n  border: 2px solid black;\r\n  border-radius: 100%;\r\n}\r\n\r\n.sunk {\r\n  background-color: hsla(0, 0%, 0%, 0.269);\r\n}\r\n\r\n.bridge {\r\n  width: 70%;\r\n  height: 60%;\r\n  border: 2px solid black;\r\n  pointer-events: none;\r\n}\r\n\r\n.battery {\r\n  position: relative;\r\n  width: 80%;\r\n  height: 60%;\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  grid-template-rows: repeat(3, 1fr);\r\n  align-items: center;\r\n  pointer-events: none;\r\n  /* background-color: inherit; */\r\n}\r\n.battery:last-child {\r\n  transform: rotate(180deg);\r\n}\r\n.turret {\r\n  background-color: inherit;\r\n  position: relative;\r\n  z-index: 2;\r\n  width: 100%;\r\n  height: 45%;\r\n  border: 1px solid black;\r\n  border-radius: 50%;\r\n  grid-column: 2;\r\n  grid-row: 1 / -1;\r\n  transform: scale(2.1);\r\n}\r\n.shipCreate .turret {\r\n  background-color: white;\r\n}\r\n.ship .turret {\r\n  background-color: white;\r\n}\r\n.ship.sunk .turret {\r\n  background-color: black;\r\n}\r\n\r\n.gun {\r\n  position: relative;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 45%;\r\n\r\n  background-color: black;\r\n}\r\n.missileRack {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(3, 1fr);\r\n  gap: 0.05rem;\r\n  pointer-events: none;\r\n}\r\n.missile {\r\n  border: 1px solid black;\r\n  height: 50%;\r\n  width: 100%;\r\n  border-radius: 50%;\r\n  transform: rotate(15deg);\r\n}\r\n.missile:nth-child(4),\r\n.missile:nth-child(5),\r\n.missile:nth-child(6) {\r\n  grid-row: 3;\r\n  transform: rotate(345deg);\r\n}\r\n\r\n/* START */\r\n\r\n.fleetCreationScreen {\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 1rem;\r\n  top: 0;\r\n  transition: transform 1.3s ease;\r\n  transform: translateY(0%);\r\n  position: absolute;\r\n}\r\n\r\n.fleetCreationScreen .shipContainerWrapper {\r\n  height: 22vh;\r\n  width: clamp(300px, 70%, 700px);\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.fleetCreationScreen .shipsContainer {\r\n  display: grid;\r\n  margin-right: auto;\r\n  place-items: center;\r\n  margin-right: auto;\r\n}\r\n\r\n.fleetCreationScreen .shipContainerCount {\r\n  margin-left: auto;\r\n  width: 12rem;\r\n  display: inline;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.fleetCreationScreen .gridContainer {\r\n  width: min-content;\r\n  height: min-content;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  border: 2px solid black;\r\n}\r\n\r\n.fleetCreationScreen .grid {\r\n  width: clamp(18rem, 60vw, 25rem);\r\n  height: clamp(18rem, 60vw, 25rem);\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  background-color: hsla(123, 84%, 45%, 0.171);\r\n}\r\n\r\n.textOutput {\r\n  text-align: center;\r\n  height: 4rem;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/* GAME */\r\n\r\n.gamePlayScreen {\r\n  position: absolute;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 1rem;\r\n  transition: transform 1.3s ease;\r\n  transform: translateY(100%);\r\n  flex-wrap: wrap;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n  column-gap: 3rem;\r\n}\r\n\r\n.gamePlayScreen .computerBoard,\r\n.gamePlayScreen .playerBoard {\r\n  width: min-content;\r\n  height: min-content;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  border: 2px solid black;\r\n}\r\n\r\n.gamePlayScreen .computerGrid,\r\n.gamePlayScreen .playerGrid {\r\n  width: clamp(18rem, 60vw, 25rem);\r\n  height: clamp(18rem, 60vw, 25rem);\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.boardWrapper {\r\n  transition: transform 0.5s ease; /* set to 0.5 to have animation */\r\n  transform: translateY(0);\r\n  margin-top: 2rem;\r\n}\r\n\r\n.playerGrid .cell {\r\n  background-color: hsla(123, 84%, 45%, 0.155);\r\n}\r\n\r\n.computerGrid .cell {\r\n  background-color: hsla(7, 84%, 45%, 0.169);\r\n}\r\n\r\n.computerSunken,\r\n.playerSunken,\r\n.computerSunkenOver,\r\n.playerSunkenOver {\r\n  margin: 0.5rem;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.turnAnnouncement,\r\n.turnAnnouncementOver {\r\n  position: absolute;\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n/* OVER */\r\n\r\n.gameOverScreen {\r\n  position: absolute;\r\n  display: none;\r\n  height: 100vh;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  transition: transform 1.3s ease;\r\n  transform: translateY(-110%);\r\n}\r\n\r\n.gameOverScreen .ship4 {\r\n  width: clamp(4.8rem, 24vw, 7.6rem);\r\n  height: clamp(1.2rem, 6vw, 1.9rem);\r\n}\r\n.gameOverScreen .ship3 {\r\n  width: clamp(3.6rem, 18vw, 5.7rem);\r\n  height: clamp(1.2rem, 6vw, 1.9rem);\r\n}\r\n.gameOverScreen .ship2 {\r\n  width: clamp(2.4rem, 12vw, 3.8rem);\r\n  height: clamp(1.2rem, 6vw, 1.9rem);\r\n}\r\n\r\n.overWrapper {\r\n  width: clamp(300px, 70%, 900px);\r\n  display: flex;\r\n  gap: 1rem;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.computerBoardOver,\r\n.playerBoardOver {\r\n  width: min-content;\r\n  height: min-content;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  border: 2px solid black;\r\n}\r\n\r\n.computerGridOver,\r\n.playerGridOver {\r\n  width: clamp(12rem, 60vw, 19rem);\r\n  height: clamp(12rem, 60vw, 19rem);\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.playerBoardOver .cell {\r\n  width: clamp(1.2rem, 6vw, 1.9rem);\r\n  height: clamp(1.2rem, 6vw, 1.9rem);\r\n  background-color: hsla(123, 84%, 45%, 0.263);\r\n}\r\n\r\n.computerBoardOver .cell {\r\n  width: clamp(1.2rem, 6vw, 1.9rem);\r\n  height: clamp(1.2rem, 6vw, 1.9rem);\r\n  background-color: hsla(7, 84%, 45%, 0.267);\r\n}\r\n\r\n.gridCover {\r\n  position: absolute;\r\n  width: clamp(12rem, 60vw, 19rem);\r\n  height: clamp(12rem, 60vw, 19rem);\r\n  background-color: rgba(0, 0, 0, 0.324);\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.computerSunkenOver,\r\n.playerSunkenOver {\r\n  color: white;\r\n  font-size: 4rem;\r\n}\r\n\r\n.winner {\r\n  font-weight: bold;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.buttonWrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  place-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.restartBtn {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  background-color: hsla(270, 50%, 40%, 0.208);\r\n  border: 2px solid black;\r\n  padding: 0.2rem;\r\n  margin: 0.2rem;\r\n  margin-right: auto;\r\n}\r\n.restartBtn:hover {\r\n  background-color: aliceblue;\r\n}\r\n\r\n.restartBtn:active {\r\n  background-color: black;\r\n  color: aliceblue;\r\n}\r\n\r\n.turnAnnouncementOver {\r\n  margin-left: auto;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.footerLink:any-link {\r\n  color: white;\r\n}\r\n.footerLink:hover {\r\n  color: black;\r\n}\r\n\r\n/* BACKGROUND */\r\n\r\n/* background util */\r\n\r\n.moveIn {\r\n  animation: fleetAsync 10s linear infinite, moveIn 2s ease-out 1;\r\n}\r\n\r\n.BGSink {\r\n  animation: sinkShip 10s linear;\r\n}\r\n.computerFleet .BGSink {\r\n  animation: CompSinkShip 15s ease-in;\r\n}\r\n.BGSink .wave,\r\n.BGSink .trail {\r\n  transition: scale 5s ease-in;\r\n  scale: 1 0;\r\n}\r\n\r\n.destroyed {\r\n  display: none;\r\n}\r\n\r\n.detonating .hitExplosion {\r\n  scale: 1.8;\r\n}\r\n.computerFleet .detonating .hitExplosion {\r\n  scale: 0.7;\r\n}\r\n\r\n.computerFleet .burning {\r\n  scale: 0.3;\r\n}\r\n\r\n@keyframes sinkShip {\r\n  0% {\r\n    transform: translateX(-50%);\r\n  }\r\n  100% {\r\n    transform: translateX(-150vw);\r\n  }\r\n}\r\n@keyframes CompSinkShip {\r\n  0% {\r\n    transform: translateX(-50%);\r\n  }\r\n  100% {\r\n    transform: translateX(-150vw);\r\n  }\r\n}\r\n\r\n.backgroundScreen {\r\n  position: absolute;\r\n  z-index: -10;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: linear-gradient(hsl(214, 66%, 77%) 20%, rgb(89, 89, 122));\r\n  pointer-events: none;\r\n  overflow: hidden;\r\n}\r\n.sea {\r\n  height: 50vh;\r\n  width: 100%;\r\n  position: absolute;\r\n  z-index: -9;\r\n  top: 50%;\r\n  background: linear-gradient(hsl(192, 18%, 48%), rgb(27, 61, 66));\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n}\r\n.iceBerg {\r\n  position: absolute;\r\n  z-index: -11;\r\n  opacity: 0.99;\r\n  width: clamp(10vh, 10vw, 10vw);\r\n  height: clamp(8vh, 8vw, 8vw);\r\n  background: linear-gradient(white, rgb(194, 194, 194));\r\n  top: 50%;\r\n  transform: translateY(-100%) translateX(-100%);\r\n  animation: iceFloatBy 18s linear infinite;\r\n  animation-play-state: paused;\r\n}\r\n.iceBergOne {\r\n  border-left: clamp(5vh, 5vw, 5vw) solid transparent;\r\n  border-right: clamp(7vh, 7vw, 7vw) solid transparent;\r\n  border-bottom: clamp(10vh, 10vw, 10vw) solid rgb(225, 225, 225);\r\n}\r\n.iceBergTwo {\r\n  animation-delay: 2s;\r\n  border-left: clamp(8vh, 8vw, 8vw) solid transparent;\r\n  border-right: clamp(7vh, 7vw, 7vw) solid transparent;\r\n  border-bottom: clamp(6vh, 6vw, 6vw) solid rgb(225, 225, 225);\r\n}\r\n.iceBergThree {\r\n  animation-delay: 2.5s;\r\n  border-left: clamp(9vh, 9vw, 9vw) solid transparent;\r\n  border-right: clamp(6vh, 6vw, 6vw) solid transparent;\r\n  border-bottom: clamp(9vh, 9vw, 9vw) solid rgb(225, 225, 225);\r\n}\r\n.iceBergFour {\r\n  animation-delay: 10s;\r\n  border-left: clamp(6vh, 6vw, 6vw) solid transparent;\r\n  border-right: clamp(6vh, 6vw, 6vw) solid transparent;\r\n  border-bottom: clamp(8.2vh, 8.2vw, 8.2vw) solid rgb(225, 225, 225);\r\n}\r\n.iceBergFive {\r\n  animation-delay: 11s;\r\n  border-left: clamp(12vh, 12vw, 12vw) solid transparent;\r\n  border-right: clamp(12vh, 12vw, 12vw) solid transparent;\r\n  border-bottom: clamp(10vh, 10vw, 10vw) solid rgb(225, 225, 225);\r\n}\r\n.iceBergSix {\r\n  animation-delay: 12s;\r\n  border-left: clamp(5vh, 5vw, 5vw) solid transparent;\r\n  border-right: clamp(12vh, 12vw, 12vw) solid transparent;\r\n  border-bottom: clamp(15vh, 15vw, 15vw) solid rgb(225, 225, 225);\r\n}\r\n.iceBergSeven {\r\n  animation-delay: 6.5s;\r\n  border-left: clamp(12vh, 12vw, 12vw) solid transparent;\r\n  border-right: clamp(15vh, 15vw, 15vw) solid transparent;\r\n  border-bottom: clamp(3vh, 3vw, 3vw) solid rgb(225, 225, 225);\r\n}\r\n.animateIce {\r\n  animation-play-state: running;\r\n}\r\n\r\n@keyframes iceFloatBy {\r\n  0% {\r\n    transform: translateX(100vw) translateY(-100%);\r\n  }\r\n  100% {\r\n    transform: translateX(-20vw) translateY(-100%);\r\n  }\r\n}\r\n\r\n.playerFleet {\r\n  position: relative;\r\n  z-index: 1;\r\n  grid-row: 2;\r\n}\r\n.computerFleet {\r\n  z-index: 1;\r\n  position: relative;\r\n  grid-row: 1;\r\n}\r\n.computerFleet > span {\r\n  scale: 0.3;\r\n}\r\n\r\n/* background ships */\r\n\r\n.computerFleet .battleship {\r\n  width: clamp(10vh, 10vw, 10vw);\r\n  height: clamp(1.7vh, 1.7vw, 1.7vw);\r\n  top: 0%;\r\n  left: 50%;\r\n}\r\n.computerFleet .cruiser {\r\n  width: clamp(7vh, 7vw, 7vw);\r\n  height: clamp(1.2vh, 1.2vw, 1.2vw);\r\n  top: 15%;\r\n  left: 40%;\r\n}\r\n.computerFleet .cruiser:nth-of-type(2) {\r\n  top: 15%;\r\n  left: 60%;\r\n}\r\n.computerFleet .destroyer {\r\n  width: clamp(4.4vh, 4.4vw, 4.4vw);\r\n  height: clamp(0.9vh, 0.9vw, 0.9vw);\r\n}\r\n.computerFleet .destroyer:nth-of-type(4) {\r\n  top: 27%;\r\n  left: 33%;\r\n}\r\n.computerFleet .destroyer:nth-of-type(5) {\r\n  top: 30%;\r\n  left: 55%;\r\n}\r\n.computerFleet .destroyer:nth-of-type(6) {\r\n  top: 25%;\r\n  left: 67%;\r\n}\r\n.computerFleet .BGGun {\r\n  z-index: 5;\r\n}\r\n.battleship {\r\n  position: absolute;\r\n  z-index: 3;\r\n  width: clamp(35vh, 35vw, 35vw);\r\n  height: clamp(5vh, 5vw, 5vw);\r\n  top: 33%;\r\n  left: 50%;\r\n  transform: translateX(-120vw);\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: 2fr 3fr;\r\n  transition: transform 2s ease-out;\r\n}\r\n.cruiser {\r\n  position: absolute;\r\n  z-index: 2;\r\n  width: clamp(18vh, 18vw, 18vw);\r\n  height: clamp(3.2vh, 3.2vw, 3.2vw);\r\n  top: 23%;\r\n  left: 22%;\r\n  transform: translateX(-120vw);\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 2fr 3fr;\r\n  transition: transform 2s ease-out;\r\n}\r\n.cruiser:nth-of-type(2) {\r\n  left: 78%;\r\n}\r\n.destroyer {\r\n  z-index: 1;\r\n  position: absolute;\r\n  width: clamp(10vh, 10vw, 10vw);\r\n  height: clamp(2vh, 2vw, 2vw);\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 2fr 3fr;\r\n  transition: transform 2s ease;\r\n  transform: translateX(-120vw);\r\n}\r\n\r\n.playerFleet .destroyer:nth-of-type(4) {\r\n  top: 59%;\r\n  left: 90%;\r\n}\r\n.playerFleet .destroyer:nth-of-type(5) {\r\n  top: 63%;\r\n  left: 10%;\r\n}\r\n.playerFleet .destroyer:nth-of-type(6) {\r\n  top: 5%;\r\n  left: 90%;\r\n}\r\n\r\n/* background parts */\r\n\r\n.body {\r\n  position: relative;\r\n  z-index: 2;\r\n  grid-column: 1 / -1;\r\n  grid-row: 2/ -1;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 6fr 2fr;\r\n}\r\n\r\n.end {\r\n  background: linear-gradient(rgb(78, 78, 78), rgb(50, 50, 50));\r\n  clip-path: polygon(0 10%, 100% 100%, 100% 15%, 0 0);\r\n}\r\n.center {\r\n  position: relative;\r\n  left: -0.5%;\r\n  width: 101.2%;\r\n  background: linear-gradient(rgb(78, 78, 78), rgb(50, 50, 50));\r\n  clip-path: polygon(0 15%, 0 100%, 100% 100%, 100% 15%);\r\n}\r\n\r\n.start {\r\n  background: linear-gradient(rgb(78, 78, 78), rgb(50, 50, 50));\r\n  clip-path: polygon(0 15%, 100% 0, 100% 10%, 0 100%);\r\n}\r\n\r\n.bodyBorder {\r\n  z-index: 1;\r\n  position: absolute;\r\n  width: 101.5%;\r\n  height: 64%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 6fr 2fr;\r\n  top: 38%;\r\n  left: -0.5%;\r\n}\r\n\r\n.endBorder {\r\n  background: black;\r\n  clip-path: polygon(0 10%, 100% 100%, 100% 15%, 0 0);\r\n}\r\n.centerBorder {\r\n  background: black;\r\n  clip-path: polygon(0 15%, 0 100%, 100% 100%, 100% 15%);\r\n}\r\n.startBorder {\r\n  background: black;\r\n  clip-path: polygon(0 15%, 100% 0, 100% 10%, 0 100%);\r\n}\r\n\r\n.BGBridge {\r\n  position: relative;\r\n  width: 80%;\r\n  height: 100%;\r\n  background: linear-gradient(rgb(116, 116, 116), rgb(71, 71, 71) 90%, black);\r\n  top: 24%;\r\n  left: -10%;\r\n  border: 2px solid black;\r\n  border-radius: 20px 50% 0 0;\r\n}\r\n.cruiser .BGBridge {\r\n  width: 70%;\r\n  top: 20%;\r\n  border-radius: 20px 100% 0 0;\r\n}\r\n.destroyer .BGBridge {\r\n  width: 70%;\r\n  height: 60%;\r\n  top: 60%;\r\n  left: 30%;\r\n  border-radius: 100px 100% 0 0;\r\n}\r\n.BGAntennae {\r\n  position: relative;\r\n  width: 40%;\r\n  height: 80%;\r\n  background: linear-gradient(rgb(172, 172, 172), rgb(83, 83, 83));\r\n  top: -80%;\r\n  left: 20%;\r\n  border: 2px solid black;\r\n  border-radius: 50% 100px 0 0;\r\n}\r\n\r\n.BGMissileRack {\r\n  position: relative;\r\n  width: 70%;\r\n  height: 50%;\r\n  top: 95%;\r\n}\r\n.BGMissile {\r\n  position: absolute;\r\n  width: 50%;\r\n  height: 20%;\r\n  top: 30%;\r\n  background-color: black;\r\n  border-radius: 50%;\r\n  transition: transform 1s ease;\r\n}\r\n.BGMissile::after {\r\n  opacity: 0;\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 300%;\r\n  top: -80%;\r\n  background: radial-gradient(black 20%, yellow 60%);\r\n  border-radius: 50%;\r\n  left: -70%;\r\n}\r\n.BGMissile::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  opacity: 0;\r\n  width: 30%;\r\n  height: 500%;\r\n  border-radius: 50%;\r\n  background-color: black;\r\n}\r\n\r\n.animateMissile.BGMissile::after {\r\n  opacity: 1;\r\n}\r\n.animateMissile.BGMissile::before {\r\n  animation: missileSmoke 2s linear;\r\n}\r\n.animateMissile {\r\n  animation: launchMissile 2s linear;\r\n}\r\n.BGMissile:nth-of-type(2) {\r\n  left: 20%;\r\n}\r\n.BGMissile:nth-of-type(3) {\r\n  left: 40%;\r\n}\r\n\r\n@keyframes missileSmoke {\r\n  0% {\r\n    transform: scale(3);\r\n    opacity: 1;\r\n  }\r\n  30% {\r\n    transform: scale(3) translateX(-100%);\r\n  }\r\n  70% {\r\n    transform: scale(3) translateY(-350%) translateX(-14vh);\r\n  }\r\n  90% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(5) translateY(-400%) translateX(-15vh);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes launchMissile {\r\n  0% {\r\n    transform: rotate(-90deg);\r\n  }\r\n  30% {\r\n    transform: rotate(-90deg) translateX(200%);\r\n  }\r\n  100% {\r\n    transform: rotate(-90deg) translateX(100vh);\r\n  }\r\n}\r\n\r\n.armMissiles {\r\n  transform: rotate(-90deg);\r\n}\r\n\r\n.BGBattery {\r\n  position: relative;\r\n}\r\n.BGBattery:nth-of-type(1) {\r\n  left: -20%;\r\n}\r\n.BGBattery:nth-of-type(3) {\r\n  transform: scaleX(-1);\r\n}\r\n.BGBattery:nth-of-type(4) {\r\n  transform: scaleX(-1);\r\n  right: 30%;\r\n}\r\n.BGTurret {\r\n  position: absolute;\r\n  z-index: 4;\r\n  width: 40%;\r\n  height: 70%;\r\n  top: 55%;\r\n  left: 65%;\r\n  border-radius: 30% 30% 0 0;\r\n  background: linear-gradient(rgb(96, 96, 96), rgb(77, 77, 77) 90%, black);\r\n  border: 2px solid black;\r\n}\r\n.BGGun {\r\n  position: absolute;\r\n  z-index: 3;\r\n  width: 40%;\r\n  height: 20%;\r\n  border-radius: 20%;\r\n  border: 2px solid black;\r\n  top: 85%;\r\n  left: 32%;\r\n  background-color: rgb(79, 79, 79);\r\n  transform-origin: 100% 100%;\r\n  transform: rotate(15deg);\r\n  transition: transform 1s ease;\r\n  /*  animation-delay: 2s; */ /* clean this up */\r\n}\r\n\r\n.animateGun {\r\n  animation: gunRecoil 1s ease-out;\r\n}\r\n@keyframes gunRecoil {\r\n  0% {\r\n    translate: 0 0;\r\n  }\r\n  20% {\r\n    translate: 0 100%;\r\n  }\r\n  100% {\r\n    translate: 0 0;\r\n  }\r\n}\r\n\r\n.BGGun:nth-child(2) {\r\n  transform: rotate(25deg);\r\n}\r\n.BGGun:nth-child(3) {\r\n  transform: rotate(20deg);\r\n}\r\n\r\n.rotateGuns {\r\n  transform: rotateZ(90deg) scaleX(0.7);\r\n}\r\n.rotateGuns:nth-child(2) {\r\n  transform: rotateZ(90deg) scaleX(0.7);\r\n  left: 42%;\r\n}\r\n.rotateGuns:nth-child(3) {\r\n  transform: rotateZ(90deg) scaleX(0.7);\r\n  left: 52%;\r\n}\r\n\r\n.wave {\r\n  position: absolute;\r\n  z-index: 5;\r\n  width: 30%;\r\n  height: 60%;\r\n  top: 79%;\r\n  left: 55%;\r\n  border-radius: 100% 50% 0 0;\r\n  background: linear-gradient(hsl(191, 30%, 68%) 40%, transparent 50%);\r\n  animation: waveRide 3s ease-in-out infinite;\r\n}\r\n.battleship .wave .trail {\r\n  animation: waveRide 5s ease-in-out infinite;\r\n  animation-delay: 2s;\r\n}\r\n.battleship:nth-of-type(2) .wave {\r\n  animation-delay: 1s;\r\n}\r\n.cruiser .wave .trail {\r\n  animation: waveRide 4s ease-in-out infinite;\r\n  animation-delay: 5s;\r\n}\r\n.cruiser:nth-of-type(2) .wave .trail {\r\n  animation-delay: 8s;\r\n}\r\n.cruiser:nth-of-type(3) .wave .trail {\r\n  animation-delay: 3.7s;\r\n}\r\n.cruiser:nth-of-type(4) .wave .trail {\r\n  animation-delay: 7s;\r\n}\r\n.destroyer .wave .trail {\r\n  animation-delay: 4s;\r\n}\r\n.destroyer:nth-of-type(2) .wave .trail {\r\n  animation-delay: 1.8s;\r\n}\r\n.destroyer:nth-of-type(3) .wave .trail {\r\n  animation-delay: 8.8s;\r\n}\r\n.destroyer:nth-of-type(4) .wave .trail {\r\n  animation-delay: 5.3s;\r\n}\r\n.destroyer:nth-of-type(5) .wave .trail {\r\n  animation-delay: 2.2s;\r\n}\r\n.destroyer:nth-of-type(6) .wave .trail {\r\n  animation-delay: 4.6s;\r\n}\r\n\r\n.trail {\r\n  position: absolute;\r\n  z-index: 5;\r\n  background: linear-gradient(-90deg, hsl(191, 30%, 68%) 40%, transparent 50%);\r\n  width: 200%;\r\n  height: 16%;\r\n  top: 88%;\r\n  left: -130%;\r\n  transform-origin: 120% 50%;\r\n  animation: trailAnimation 6s ease-in-out infinite;\r\n}\r\n\r\n@keyframes waveRide {\r\n  0% {\r\n    transform: translateX(-2%) scale(1.05);\r\n  }\r\n  25% {\r\n    transform: translateX(6%) scale(0.9);\r\n  }\r\n  50% {\r\n    transform: translateX(-4%) scale(1.1);\r\n  }\r\n  75% {\r\n    transform: translateX(4%) scale(0.9);\r\n  }\r\n  100% {\r\n    transform: translateX(-2%) scale(1.05);\r\n  }\r\n}\r\n\r\n@keyframes fleetAsync {\r\n  0% {\r\n    transform: translate(0%, 0%) translateX(-50%);\r\n  }\r\n  25% {\r\n    transform: translate(5%, 3%) translateX(-50%);\r\n  }\r\n  50% {\r\n    transform: translate(-5%, -2%) translateX(-50%);\r\n  }\r\n  75% {\r\n    transform: translate(2%, 4%) translateX(-50%);\r\n  }\r\n  100% {\r\n    transform: translate(0%, 0%) translateX(-50%);\r\n  }\r\n}\r\n@keyframes trailAnimation {\r\n  0% {\r\n    transform: translateY(0%) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateY(10%) scale(1.1);\r\n  }\r\n  50% {\r\n    transform: translateY(-5%) scale(0.92);\r\n  }\r\n  75% {\r\n    transform: translateY(8%) scale(1.05);\r\n  }\r\n  75% {\r\n    transform: translateY(0) scale(1);\r\n  }\r\n}\r\n\r\n@keyframes moveIn {\r\n  0% {\r\n    transform: translateX(-100vw);\r\n  }\r\n  100% {\r\n    transform: translateX(-50%) translate(4%, 2%);\r\n  }\r\n}\r\n\r\n/*  EFFECTS */\r\n\r\n.hitExplosion {\r\n  z-index: 6;\r\n  position: absolute;\r\n  top: 50%; /* 10 - 55 */\r\n  left: 15%; /* 15 - 70 */\r\n}\r\n.explosion {\r\n  z-index: 10;\r\n  position: absolute;\r\n  background: radial-gradient(rgb(213, 220, 109) 60%, transparent 70%);\r\n  width: clamp(1vh, 1vw, 1vw);\r\n  height: clamp(1vh, 1vw, 1vw);\r\n  animation: hitExplosion 0.6s ease-out 1;\r\n  /* animation-delay: 2s; */ /* clean this up */\r\n  border-radius: 50%;\r\n  display: flex;\r\n  place-items: center;\r\n  opacity: 0; /* change to 0 */\r\n}\r\n.explInner {\r\n  background: radial-gradient(rgb(38, 38, 28) 30%, transparent 40%);\r\n  width: clamp(1vh, 1vw, 1vw);\r\n  height: clamp(1vh, 1vw, 1vw);\r\n}\r\n.explSmoke {\r\n  position: absolute;\r\n  opacity: 0; /* change to 0 */\r\n  z-index: 2;\r\n  width: clamp(3vh, 3vw, 3vw);\r\n  height: clamp(3vh, 3vw, 3vw);\r\n  border-radius: 50%;\r\n  background-color: rgba(0, 0, 0, 0.621);\r\n  animation: explSmoke 3s ease-out;\r\n  /* animation-delay: 2s; */ /* clean this up */\r\n  transform-origin: -50% -50%;\r\n  translate: -35% -35%;\r\n}\r\n.computerFleet .hitExplosion {\r\n  scale: 0.3;\r\n}\r\n\r\n@keyframes explSmoke {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  25% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(1.8) translateY(-200%) translateX(-300%);\r\n  }\r\n}\r\n\r\n@keyframes hitExplosion {\r\n  0% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  70% {\r\n    transform: scale(6);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(8);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.burning {\r\n  position: absolute;\r\n  z-index: 0;\r\n  width: clamp(1vh, 1vw, 1vw);\r\n  height: clamp(0.7vh, 0.7vw, 0.7vw);\r\n  background: linear-gradient(45deg, red 60%, transparent);\r\n  top: -45%;\r\n  left: 18%; /* 18 - 75 */\r\n  border-radius: 50% 0% 50% 50%;\r\n  display: flex;\r\n  place-items: center;\r\n  animation: burning 3s linear infinite;\r\n  opacity: 0.8;\r\n}\r\n.brnInner {\r\n  position: absolute;\r\n  left: 10%;\r\n  width: 60%;\r\n  height: 80%;\r\n  background: linear-gradient(45deg, rgb(212, 174, 50) 60%, transparent);\r\n  border-radius: 50% 0% 50% 50%;\r\n}\r\n.burning::before {\r\n  opacity: 0;\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 50%;\r\n  height: 50%;\r\n  background-color: rgba(0, 0, 0, 0.596);\r\n  animation: burnSmoke 1.2s ease-out infinite;\r\n  border-radius: 50%;\r\n  rotate: 45deg;\r\n  transform-origin: 100% 100%;\r\n}\r\n.burning::after {\r\n  opacity: 0;\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 50%;\r\n  height: 50%;\r\n  background-color: rgba(0, 0, 0, 0.596);\r\n  animation: burnSmoke 1.2s ease-out infinite;\r\n  animation-delay: 0.3s;\r\n  border-radius: 50%;\r\n  rotate: 45deg;\r\n  transform-origin: 100% 100%;\r\n}\r\n.brnInner::before {\r\n  opacity: 0;\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 75%;\r\n  height: 75%;\r\n  background-color: rgba(0, 0, 0, 0.596);\r\n  animation: burnSmoke 1.2s ease-out infinite;\r\n  animation-delay: 0.6s;\r\n  border-radius: 50%;\r\n  rotate: 45deg;\r\n  transform-origin: 100% 100%;\r\n}\r\n.brnInner::after {\r\n  opacity: 0;\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 75%;\r\n  height: 75%;\r\n  background-color: rgba(0, 0, 0, 0.596);\r\n  animation: burnSmoke 1.2s ease-out infinite;\r\n  animation-delay: 0.9s;\r\n  border-radius: 50%;\r\n  rotate: 45deg;\r\n  transform-origin: 100% 100%;\r\n}\r\n.playerFleet .battleship .burning {\r\n  scale: 1.2;\r\n  top: -25%;\r\n}\r\n.playerFleet .destroyer .burning {\r\n  scale: 0.8;\r\n  top: -70%;\r\n}\r\n\r\n@keyframes burning {\r\n  0% {\r\n    transform: skewX(30deg) scale(4) rotate(-45deg);\r\n  }\r\n  25% {\r\n    transform: scale(4.4) skewX(-8deg) rotate(-45deg);\r\n  }\r\n  50% {\r\n    transform: scale(3.5) skewX(30deg) rotate(-45deg);\r\n  }\r\n  75% {\r\n    transform: scale(4.5) skewX(-12deg) rotate(-45deg);\r\n  }\r\n  100% {\r\n    transform: scale(4) skewX(30deg) rotate(-45deg);\r\n  }\r\n}\r\n@keyframes burnSmoke {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(1.8) translateY(-100%) translateX(-70%);\r\n  }\r\n}\r\n\r\n.hole {\r\n  position: absolute;\r\n  z-index: 5;\r\n  top: 55% /* 0 - 20*/;\r\n  left: 45% /* 12 - 70*/;\r\n  border-radius: 50%;\r\n  width: clamp(1.5vh, 1.5vw, 1.5vw);\r\n  height: clamp(1.5vh, 1.5vw, 1.5vw);\r\n  background: radial-gradient(black 10%, rgba(0, 0, 0, 0.071) 50%);\r\n}\r\n.computerFleet .hole {\r\n  scale: 0.3;\r\n}\r\n\r\n.splash {\r\n  opacity: 0;\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 30%; /* -50 - 30% */\r\n  left: 43%; /*0 -  100 */\r\n  z-index: 2;\r\n  width: clamp(2vh, 2vw, 2vw);\r\n  height: clamp(8vh, 8vw, 8vw);\r\n  background: linear-gradient(45deg, hsl(191, 30%, 68%) 15%, transparent 20%);\r\n  transform: rotate(-45deg);\r\n  transform-origin: 0 100%;\r\n  animation: splash 1s ease-out 1;\r\n}\r\n.splashInner {\r\n  opacity: 0.9;\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: clamp(2vh, 2vw, 2vw);\r\n  height: clamp(2vh, 2vw, 2vw);\r\n  background: radial-gradient(hsl(192, 18%, 48%), hsl(191, 30%, 68%));\r\n  border-radius: 50%;\r\n  transform: rotate3d(1, 1, 0, 55deg);\r\n  top: 87%;\r\n  left: -45%;\r\n}\r\n\r\n@keyframes splash {\r\n  0% {\r\n    transform: scale(0) rotate(-45deg);\r\n    opacity: 0.99;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(2) rotate(-45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.gunFire {\r\n  position: absolute;\r\n  z-index: 5;\r\n  width: 40%;\r\n  height: 100%;\r\n  rotate: 90deg;\r\n  left: 54%;\r\n  top: -170%;\r\n}\r\n.gunFire:nth-of-type(2) {\r\n  left: 64%;\r\n}\r\n.gunFire:nth-of-type(3) {\r\n  left: 74%;\r\n}\r\n.gunFireCone {\r\n  opacity: 0; /* change to 0 */\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: radial-gradient(black 20%, yellow 30%);\r\n  border-radius: 50%;\r\n  transform-origin: 100%;\r\n  /* animation-delay: 2s;  */ /* clean this up */\r\n}\r\n.animateFireCone {\r\n  animation: FireCone 0.3s ease-out;\r\n}\r\n\r\n.gunFireSmoke {\r\n  position: absolute;\r\n  opacity: 0; /* change to 0 */\r\n  z-index: 2;\r\n  width: 40%;\r\n  height: 40%;\r\n  border-radius: 50%;\r\n  background-color: rgba(0, 0, 0, 0.621);\r\n  left: 70%;\r\n  top: 30%;\r\n  /*  animation-delay: 2s; */ /* clean this up */\r\n}\r\n.animateFireSmoke {\r\n  animation: gunSmoke 2s ease-out;\r\n}\r\n\r\n.BGBattery:nth-of-type(3) .gunFire {\r\n  transform: scaleY(-1);\r\n}\r\n.BGBattery:nth-of-type(4) .gunFire {\r\n  transform: scaleY(-1);\r\n}\r\n\r\n@keyframes gunSmoke {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  25% {\r\n    opacity: 1;\r\n    transform: scale(2) translateY(0) translateX(-50%);\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(3) translateY(200%) translateX(-150%);\r\n  }\r\n}\r\n\r\n@keyframes FireCone {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(2);\r\n  }\r\n}\r\n\r\n/* UTIL */\r\n\r\n.slideUp {\r\n  position: absolute;\r\n  transform: translateY(-100%);\r\n}\r\n\r\n.slideFromBeneath {\r\n  position: absolute;\r\n  transform: translateY(0);\r\n}\r\n.slideDown {\r\n  position: absolute;\r\n  transform: translateY(0);\r\n}\r\n\r\n.slideToMid {\r\n  transform: translateY(/* -106.5% */ /* -116.5% */ -107.5%);\r\n}\r\n\r\n.slideFromMid {\r\n  transform: translateY(/* 106.5% */ /*  116.5% */ 107.5%);\r\n}\r\n\r\n.highlight {\r\n  box-shadow: 0 0 5px 5px rebeccapurple;\r\n}\r\n\r\n.selected {\r\n  background-color: cadetblue;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board),
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (num, bool) => {
  return {
    size: num,
    hits: 0,
    isSunk: false,
    axis: bool,
    x: [],
    y: [],
    id: null,
    wasHit() {
      this.hits++;
    },
    wasSunk() {
      if (this.hits >= this.size) {
        this.isSunk = true;
        return this.isSunk;
      }
      return this.isSunk;
    },
  };
};

const Board = () => {
  return {
    visited: [],
    occupied: [],
    sunken: [],
    attacks: [],
    hits: [],
    createGrid() {
      const axis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const grid = axis.map((x) => axis.map((y) => [x, y])).flat();
      return grid;
    },
    isOver() {
      if (
        this.sunken.length >= this.occupied.length &&
        this.occupied.length !== 0
      ) {
        return true;
      }
      return false;
    },
    canBePlaced(x, y, size, axis, array) {
      const directions = [
        { dx: -1, dy: 0 },
        { dx: 1, dy: 0 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 },
        { dx: -1, dy: -1 },
        { dx: 1, dy: -1 },
        { dx: -1, dy: 1 },
        { dx: 1, dy: 1 },
      ];
      const coords = [];
      if (x < 0 || y < 0) {
        coords.can = false;
        return coords;
      }
      coords.push({ cx: [x], cy: [y] });
      for (let i = 1; i <= size - 1; i++) {
        if (axis) {
          coords[0].cx.push(x + i);
        } else {
          coords[0].cy.push(y + i);
        }
      }

      const mappedDirections = coords[0].cx.flatMap((cx) =>
        coords[0].cy.flatMap((cy) =>
          directions.map((direction) => ({
            x: cx + direction.dx,
            y: cy + direction.dy,
          }))
        )
      );

      const matchingCoords = array.filter((obj) =>
        mappedDirections.some(
          (coord) => obj.x.includes(coord.x) && obj.y.includes(coord.y)
        )
      );

      if (axis && x + size - 1 > 9 && x >= 0) {
        coords.can = false;
        return coords;
      }
      if (!axis && y + size - 1 > 9 && y >= 0) {
        coords.can = false;
        return coords;
      }
      if (matchingCoords.length !== 0) {
        coords.can = false;
        return coords;
      }
      coords.can = true;
      return coords;
    },
    placeShip(x, y, size, axis) {
      //place
      if (this.canBePlaced(x, y, size, axis, this.occupied).can) {
        const newShip = Ship(size, axis);
        if (newShip.axis) {
          newShip.y.push(y);
          newShip.x.push(x);
          for (let i = 1; i <= size - 1; i++) {
            newShip.x.push(x + i);
          }
        } else {
          newShip.x.push(x);
          newShip.y.push(y);
          for (let i = 1; i <= size - 1; i++) {
            newShip.y.push(y + i);
          }
        }
        newShip.id = 1 + this.occupied.length;
        this.occupied.push(newShip);
        return true;
      } else {
        return false;
      }
    },

    markAdjacent(coordsObject, sunk) {
      let directions;
      if (!sunk) {
        directions = [
          { dx: -1, dy: -1 },
          { dx: -1, dy: 1 },
          { dx: 1, dy: -1 },
          { dx: 1, dy: 1 },
        ];
      } else {
        directions = [
          { dx: -1, dy: 0 },
          { dx: 1, dy: 0 },
          { dx: 0, dy: -1 },
          { dx: 0, dy: 1 },
          { dx: -1, dy: -1 },
          { dx: 1, dy: -1 },
          { dx: -1, dy: 1 },
          { dx: 1, dy: 1 },
        ];
      }

      const mappedCoords = coordsObject.x.flatMap((cx) =>
        coordsObject.y.flatMap((cy) =>
          directions.map((direction) => ({
            x: cx + direction.dx,
            y: cy + direction.dy,
          }))
        )
      );

      return mappedCoords.map(({ x, y }) => [x, y]);
    },
    checkCoords(coord) {
      if (
        this.visited.some(
          (pair) => pair[0] === coord[0] && pair[1] === coord[1]
        )
      ) {
        return false;
      }
      return true;
    },
    IncomingAttack(x, y) {
      // attack

      this.visited.push([x, y]);
      this.attacks.push([x, y]);

      const theRightShip = this.occupied.filter(
        (obj) => obj.x.includes(x) && obj.y.includes(y)
      );
      if (theRightShip[0]) {
        theRightShip[0].wasHit();
        this.hits.push([x, y]);
        if (theRightShip[0].wasSunk()) {
          let marks = this.markAdjacent(
            {
              x: theRightShip[0].x,
              y: theRightShip[0].y,
            },
            true
          );
          marks.forEach((mark) => {
            if (
              this.checkCoords(mark) &&
              mark[0] >= 0 &&
              mark[0] <= 9 &&
              mark[1] >= 0 &&
              mark[1] <= 9
            ) {
              this.visited.push(mark);
            }
          });
          this.sunken.push(theRightShip[0]);
        }
        let marks = this.markAdjacent({ x: [x], y: [y] }, false);

        marks.forEach((mark) => {
          if (
            this.checkCoords(mark) &&
            mark[0] >= 0 &&
            mark[0] <= 9 &&
            mark[1] >= 0 &&
            mark[1] <= 9
          ) {
            this.visited.push(mark);
          }
        });
        return theRightShip[0];
      }
      return false;
    },
    reportLost() {
      if (this.sunken.length !== 0) {
        const lostShip = this.sunken[this.hits.sunken.length - 1];
        return lostShip;
      }
      return false;
    },
    resetBoard() {
      this.visited.length = 0;
      this.occupied.length = 0;
      this.sunken.length = 0;
      this.attacks.length = 0;
      this.hits.length = 0;
    },
  };
};

const Player = (type) => {
  return {
    type: type,
    nextTarget: [],
    hits: [],
    possibleTargets(coords) {
      let directions = [
        { dx: -1, dy: 0 },
        { dx: 1, dy: 0 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 },
      ];
      const mappedCoords = directions.map((direction) => ({
        x: coords.x + direction.dx,
        y: coords.y + direction.dy,
      }));
      const validCoords = mappedCoords.filter((obj) => {
        return obj.x <= 9 && obj.x >= 0 && obj.y <= 9 && obj.y >= 0;
      });

      return validCoords;
    },
    /* excludeCells(coord, board) {
      const dirs = [];
      const map = (coord, board) => {
        const temp = [];
        temp.push({ x: coord.x + 1, y: coord.y });
        temp.push({ x: coord.x, y: coord.y + 1 });
        temp.push({ x: coord.x - 1, y: coord.y });
        temp.push({ x: coord.x, y: coord.y - 1 });

        const filtered = temp.filter((obj) => {
          return obj.x <= 9 && obj.x >= 0 && obj.y <= 9 && obj.y >= 0;
        });
        const notVisited = filtered.filter((element) => {
          return !board.visited.some(
            (pair) => pair[0] === element.x && pair[1] === element.y
          );
        });
        return notVisited;
      };
      const mapped = map(coord, board);

      if (mapped.length == 0) {
        dirs.push([coord.x, coord.y]);
      } else {
        mapped.forEach((item) => {
          if (map(item, board).length >= 3) {
            dirs.push([item.x, item.y]);
          }
        });
      }

      return dirs;
    }, */
    calcTargetCoords(board) {
      const grid = board.createGrid();
      const filteredCoords = grid.filter((element) => {
        return !board.visited.some(
          (pair) => pair[0] === element[0] && pair[1] === element[1]
        );
      });
      const random = Math.floor(Math.random() * filteredCoords.length);
      const coords = filteredCoords[random];
      return { x: coords[0], y: coords[1] };
    },
    probabilityDensitySearch(board) {
      const arrayOfArrays = [];
      const alive = board.occupied.filter((ship) => {
        return ship.isSunk === false;
      });
      const sizes = [];
      const uniques = new Set();
      alive.forEach((ship) => {
        if (!uniques.has(ship.size)) {
          uniques.add(ship.size);
          sizes.push(ship.size);
        }
      });

      const checkDirections = (cell, arrayOfArrays, size) => {
        const tempLeft = [];
        const tempRight = [];
        const tempUp = [];
        const tempDown = [];
        for (let i = 0; i <= size - 1; i++) {
          tempLeft.push([cell[0] - i, cell[1]]);
          tempRight.push([cell[0] + i, cell[1]]);
          tempUp.push([cell[0], cell[1] - i]);
          tempDown.push([cell[0], cell[1] + i]);
        }
        if (!checkArray(tempLeft)) {
          tempLeft.length = 0;
        } else {
          arrayOfArrays.push([...tempLeft]);
        }
        if (!checkArray(tempRight)) {
          tempRight.length = 0;
        } else {
          arrayOfArrays.push([...tempRight]);
        }
        if (!checkArray(tempUp)) {
          tempUp.length = 0;
        } else {
          arrayOfArrays.push([...tempUp]);
        }
        if (!checkArray(tempDown)) {
          tempDown.length = 0;
        } else {
          arrayOfArrays.push([...tempDown]);
        }
      };

      const checkArray = (array) => {
        if (
          array.some((element) => {
            return (
              element[0] < 0 ||
              element[0] > 9 ||
              element[1] < 0 ||
              element[1] > 9
            );
          })
        ) {
          return false;
        }
        if (
          array.filter((element) => {
            return board.visited.some(
              (pair) => pair[0] === element[0] && pair[1] === element[1]
            );
          }).length !== 0
        ) {
          return false;
        }
        return true;
      };

      const gridCells = board.createGrid();
      const filteredCells = gridCells.filter((element) => {
        return !board.visited.some(
          (pair) => pair[0] === element[0] && pair[1] === element[1]
        );
      });

      alive.forEach((ship) => {
        filteredCells.forEach((cell) =>
          checkDirections(cell, arrayOfArrays, ship.size)
        );
      });

      const weightedCells = [];

      filteredCells.forEach((cell) => {
        const cellWeight = arrayOfArrays
          .filter((array) => array[0][0] === cell[0] && array[0][1] === cell[1])
          .reduce((totalWeight, array) => totalWeight + array.length, 0);

        weightedCells.push({
          x: cell[0],
          y: cell[1],
          weight: cellWeight + 1,
        });
      });

      const sortByWeight = weightedCells.sort((a, b) => b.weight - a.weight);
      const highestWeight = sortByWeight.filter(
        (cell) => cell.weight == sortByWeight[0].weight
      );
      return highestWeight[Math.floor(Math.random() * highestWeight.length)];
    },

    commitAttack(board, input = this.probabilityDensitySearch(board)) {
      //ATTACK
      this.nextTarget = this.nextTarget.filter((element) => {
        return !board.visited.some(
          (pair) => pair[0] === element.x && pair[1] === element.y
        );
      });

      let coords = input;

      /* const excluded = this.excludeCells(coords, board);
      const excludedAndVisited = [...board.visited, ...excluded];
      while (
        excludedAndVisited.some(
          (pair) => pair[0] === coords.x && pair[1] === coords.y
        )
      ) {
        coords = this.calcTargetCoords(board);
      } */

      if (this.nextTarget.length !== 0) {
        coords = this.nextTarget.splice(
          Math.floor(Math.random() * this.nextTarget.length),
          1
        )[0];
      }

      const attack = board.IncomingAttack(coords.x, coords.y);
      if (attack) {
        const nextCoords = this.possibleTargets(coords);
        nextCoords.forEach((coord) => this.nextTarget.push({ ...coord }));
        this.hits.push(coords);
        return true;
      }
      return false;
    },
    createFleet(board) {
      const size = [4, 3, 3, 2, 2, 2];
      while (board.occupied.length < 6) {
        const coords = this.calcTargetCoords(board);
        const axis = Math.random() < 0.5 ? false : true;
        const place = board.placeShip(coords.x, coords.y, size[0], axis);
        if (place) {
          size.shift();
        }
      }
    },
    resetPlayer() {
      this.nextTarget.length = 0;
      this.hits.length = 0;
    },
  };
};

const Game = () => {
  const computer = {
    player: Player("Computer"),
    board: Board(),
  };
  const human = {
    player: Player("Human"),
    board: Board(),
  };

  return {
    current: human.player.type,
    turns: 1,
    over: false,
    computer: computer,
    human: human,
    IsReady(array) {
      if (array.length === 6) {
        return true;
      }
      return false;
    },
    newGame(input) {
      computer.player.createFleet(computer.board);
      !input
        ? human.player.createFleet(human.board)
        : input.forEach((item) =>
            human.board.placeShip(item.x[0], item.y[0], item.size, item.axis)
          );
    },
    declareWinner() {
      if (human.board.isOver()) {
        this.over = true;
        return computer.player.type;
      } else if (computer.board.isOver()) {
        this.over = true;
        return human.player.type;
      }
      return false;
    },
    turn(input) {
      if (!this.declareWinner()) {
        if (this.current === "Computer") {
          computer.player.commitAttack(human.board);
          this.current = "Human";
          this.turns++;
          return true;
        }
        if (this.current === "Human") {
          input
            ? computer.board.IncomingAttack(input[0], input[1])
            : human.player.commitAttack(computer.board);
          this.current = "Computer";
          return true;
        }
      }
      return false;
    },
    reportTurns() {
      return this.turns;
    },
    reportCurrentPlayer() {
      if (this.current === "Human") {
        return this.current;
      } else {
        return this.current;
      }
    },
    resetGame() {
      this.current = human.player.type;
      this.turns = 1;
      this.over = false;
      this.human.player.resetPlayer();
      this.computer.player.resetPlayer();
      this.human.board.resetBoard();
      this.computer.board.resetBoard();
    },
  };
};


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderGame: () => (/* binding */ RenderGame)
/* harmony export */ });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");


const RenderGame = (game) => {
  return {
    eventListeners: [],
    turnInProgress: false,
    shipsToPlace: [],
    shipsOnGrid: [],
    selected: false,
    clearEventListeners() {
      while (this.eventListeners.length !== 0) {
        const listener = this.eventListeners.pop();
        listener.elem.removeEventListener(listener.type, listener.listener);
      }
    },
    renderGrid(board) {
      const grids = document.querySelectorAll(".grid");
      const cells = board.createGrid();
      grids.forEach((grid) => {
        cells.forEach((cell) => {
          const newCell = document.createElement("div");
          newCell.classList.add("cell");
          newCell.setAttribute("data-x", cell[1]);
          newCell.setAttribute("data-y", cell[0]);
          grid.appendChild(newCell);
        });
      });
    },
    populateGrid(draggedOffset, ev, board) {
      const canBe = this.checkIfCanBePlaced(draggedOffset, ev, board);
      if (canBe) {
        this.shipsOnGrid.push(canBe);
        return true;
      } else {
        this.placementTip();
      }

      return false;
    },
    createShip(item) {
      const ship = document.createElement("div");
      ship.classList.add(`ship${item.size}`, "ship");
      if (item.axis !== null) {
        ship.classList.add(`${item.axis ? "horizontal" : "vertical"}`);
      }

      const createBattery = () => {
        const battery = document.createElement("div");
        battery.classList.add("battery");
        for (let i = 1; i <= 3; i++) {
          const gun = document.createElement("div");
          gun.classList.add("gun");
          battery.appendChild(gun);
        }
        const turret = document.createElement("div");
        turret.classList.add("turret");
        battery.appendChild(turret);
        return battery;
      };

      const createMissiles = () => {
        const missileRack = document.createElement("div");
        missileRack.classList.add("missileRack");
        for (let i = 1; i <= 6; i++) {
          const missile = document.createElement("div");
          missile.classList.add("missile");
          missileRack.appendChild(missile);
        }
        return missileRack;
      };

      for (let i = 1; i <= item.size; i++) {
        let battery = createBattery();

        if (item.size == 4 && i == 3) {
          battery = document.createElement("div");
          battery.classList.add("bridge");
        }
        if (item.size == 3 && i == 2) {
          battery = document.createElement("div");
          battery.classList.add("bridge");
        }
        if (item.size == 2) {
          battery = createMissiles();
        }
        if (item.size == 2 && i == 2) {
          battery = document.createElement("div");
          battery.classList.add("bridge");
        }
        ship.appendChild(battery);
      }

      if (item.isSunk == true) {
        ship.classList.add("sunk");
      }
      return ship;
    },
    clearGrids() {
      const grids = document.querySelectorAll(".grid");
      for (const grid of grids) {
        while (grid.firstChild) {
          grid.removeChild(grid.firstChild);
        }
      }
    },
    renderShips(array, grid) {
      array.forEach((item) => {
        const gridArray = Array.from(grid.children);
        const cell = gridArray.find(
          (child) =>
            child.getAttribute("data-x") == item.x[0] &&
            child.getAttribute("data-y") == item.y[0]
        );
        const ship = this.createShip(item);

        if (cell.children.length === 0) {
          cell.appendChild(ship);
        }
      });
    },
    renderMiss(array, grid) {
      array.forEach((item) => {
        const gridArray = Array.from(grid.children);
        const cell = gridArray.find(
          (child) =>
            child.getAttribute("data-x") == item[0] &&
            child.getAttribute("data-y") == item[1]
        );
        cell.style.backgroundColor = "hsla(0, 0.00%, 0.00%, 0.41)";
      });
    },
    renderHit(array, array2, grid) {
      array.forEach((item) => {
        const gridArray = Array.from(grid.children);
        const cell = gridArray.find(
          (child) =>
            child.getAttribute("data-x") == item[0] &&
            child.getAttribute("data-y") == item[1]
        );
        cell.classList.add("cellHit");
        cell.style.backgroundColor = "hsla(0, 88.40%, 37.30%, 0.85)";
        cell.style.border = "3px solid hsla(0, 0.00%, 0.00%, 0.77)";
        if (
          item == array[array.length - 1] &&
          item[0] == array2[array2.length - 1][0] &&
          item[1] == array2[array2.length - 1][1]
        ) {
          cell.style.border = "3px solid crimson";
        }
      });
    },
    renderAttacks(array, grid) {
      array.forEach((item) => {
        const gridArray = Array.from(grid.children);
        const cell = gridArray.find(
          (child) =>
            child.getAttribute("data-x") == item[0] &&
            child.getAttribute("data-y") == item[1]
        );
        cell.classList.add("cellMiss");
        cell.style.backgroundColor = "hsla(55, 73.20%, 30.80%, 0.54)";
        if (item == array[array.length - 1]) {
          cell.style.border = "3px solid crimson";
        }
      });
    },
    flipShip() {
      const ships = this.shipsToPlace;

      const flipHandler = (ev) => {
        if (ev.target.classList.contains("shipCreate")) {
          if (this.isTouchDevice() && !this.selected) {
            this.selected = true;
            return;
          }

          if (this.isTouchDevice() && this.selected) {
            if (ev.target.style.transform == "rotate(90deg)") {
              ev.target.setAttribute("data-axis", "true");
              ev.target.style.transform = "none";
            } else {
              ev.target.setAttribute("data-axis", "false");
              ev.target.style.transform = "rotate(90deg)";
            }
          } else if (!this.isTouchDevice()) {
            if (ev.target.style.transform == "rotate(90deg)") {
              ev.target.setAttribute("data-axis", "true");
              ev.target.style.transform = "none";
            } else {
              ev.target.setAttribute("data-axis", "false");
              ev.target.style.transform = "rotate(90deg)";
            }
          }
        }
      };
      ships.forEach((ship) => {
        ship.addEventListener("click", flipHandler);
        this.eventListeners.push({
          elem: ship,
          type: "click",
          listener: flipHandler,
        });
      });
    },
    createShipsToPlace() {
      const sizes = [4, 3, 3, 2, 2, 2];
      while (this.shipsToPlace.length < 6) {
        const size = sizes.shift();
        const ship = this.createShip({ size: size, axis: null });
        ship.setAttribute("data-size", size);
        ship.setAttribute("data-axis", true);
        ship.classList.remove("ship");
        ship.classList.add("shipCreate", `ship${size}`);
        ship.setAttribute("draggable", true);
        this.shipsToPlace.push(ship);
      }
    },
    giveShipToPlace(isTrue) {
      const container = document.querySelector(
        ".fleetCreationScreen .shipsContainer"
      );
      const count = document.querySelector(
        ".fleetCreationScreen .shipContainerCount"
      );
      if (this.isTouchDevice()) {
        count.textContent = `Touch to select, touch again to rotate, touch grid cell to place, remaining: ${this.shipsToPlace.length}`;
        count.style.fontSize = "1.3rem";
      } else {
        count.textContent = `Click to rotate, drag to place, remaining: ${this.shipsToPlace.length}`;
      }

      container.appendChild(this.shipsToPlace[0]);
      if (isTrue) {
        container.removeChild(container.firstChild);
        this.shipsToPlace.shift();
        count.textContent = this.shipsToPlace.length;
        if (this.shipsToPlace.length !== 0) {
          container.appendChild(this.shipsToPlace[0]);
        }
      }
    },
    checkIfCanBePlaced(draggedOffset, ev, board) {
      //calculates first cell of the ship and check if its a valid spot
      const axis = draggedOffset.axis;

      const offsetX = axis
        ? +ev.target.getAttribute("data-x") - draggedOffset.offset + 1
        : +ev.target.getAttribute("data-x");
      const offsetY = axis
        ? +ev.target.getAttribute("data-y")
        : +ev.target.getAttribute("data-y") - draggedOffset.offset + 1;
      const canBe = board.canBePlaced(
        offsetX,
        offsetY,
        draggedOffset.size,
        axis,
        this.shipsOnGrid
      );

      if (canBe.can) {
        return {
          x: canBe[0].cx,
          y: canBe[0].cy,
          size: draggedOffset.size,
          axis: axis,
        };
      }
      return false;
    },

    highlightCells(draggedOffset, ev, board) {
      const canBe = this.checkIfCanBePlaced(draggedOffset, ev, board);
      const cells = [];
      const x = +ev.target.getAttribute("data-x");
      const y = +ev.target.getAttribute("data-y");
      const offsetBehind = draggedOffset.size - draggedOffset.offset;
      const axis = draggedOffset.axis;
      cells.push(ev.target);

      const addCellIfValid = (cells, x, y) => {
        const cell = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
        if (cell) {
          cells.push(cell);
        }
      };
      for (let i = 0; i <= draggedOffset.offset - 1; i++) {
        if (axis) {
          addCellIfValid(cells, x - i, y);
        } else {
          addCellIfValid(cells, x, y - i);
        }
      }
      for (let i = 0; i <= offsetBehind; i++) {
        if (axis) {
          addCellIfValid(cells, x + i, y);
        } else {
          addCellIfValid(cells, x, y + i);
        }
      }

      if (canBe) {
        cells.forEach((cell) => {
          if (cell.classList.contains("cellCan")) {
            cell.classList.remove("cellCan");
          } else {
            cell.classList.add("cellCan");
          }
        });
      } else {
        cells.forEach((cell) => {
          if (cell.classList.contains("cellCannot")) {
            cell.classList.remove("cellCannot");
          } else {
            cell.classList.add("cellCannot");
          }
        });
      }
    },

    dragElement() {
      const board = game.human.board;
      const ships = this.shipsToPlace;
      const grid = document.querySelector(".fleetCreationScreen .grid");
      let draggedOffset;

      const dragStartEvHandler = (ship, ev) => {
        draggedOffset = calculateOffset(ship, ev);
        if (draggedOffset.axis == false) {
          this.rotateDraggedGhostImg(ev);
        }
      };

      const dropEventHandler = (ev) => {
        ev.preventDefault();
        if (ev.target.classList.contains("cell")) {
          this.highlightCells(draggedOffset, ev, board);
          const pushShip = this.populateGrid(draggedOffset, ev, board);
          const grid = document.querySelector(".grid");
          this.renderShips(this.shipsOnGrid, grid);
          this.giveShipToPlace(pushShip);
          if (game.IsReady(this.shipsOnGrid)) {
            game.newGame(this.shipsOnGrid);
            setTimeout(() => {
              this.changeScreen();
            }, 2000);
          }
        }
      };

      const dragOverHandler = (ev) => {
        ev.preventDefault();
      };

      const dragEnterHandler = (ev) => {
        if (ev.target.classList.contains("cell")) {
          this.highlightCells(draggedOffset, ev, board);
        }
      };

      const dragLeaveHandler = (ev) => {
        if (ev.target.classList.contains("cell")) {
          this.highlightCells(draggedOffset, ev, board);
        }
      };

      ships.forEach((ship) => {
        ship.addEventListener("dragstart", (ev) =>
          dragStartEvHandler(ship, ev)
        );
        this.eventListeners.push({
          elem: ship,
          type: "dragstart",
          listener: dragStartEvHandler,
        });
      });

      grid.addEventListener("dragover", dragOverHandler);
      this.eventListeners.push({
        elem: grid,
        type: "dragover",
        listener: dragOverHandler,
      });

      grid.addEventListener("dragenter", dragEnterHandler);
      this.eventListeners.push({
        elem: grid,
        type: "dragenter",
        listener: dragEnterHandler,
      });

      grid.addEventListener("dragleave", dragLeaveHandler);
      this.eventListeners.push({
        elem: grid,
        type: "dragleave",
        listener: dragLeaveHandler,
      });

      grid.addEventListener("drop", dropEventHandler);
      this.eventListeners.push({
        elem: grid,
        type: "drop",
        listener: dropEventHandler,
      });

      const calculateOffset = (element, ev) => {
        const rectEl = element.getBoundingClientRect();
        const axis = element.getAttribute("data-axis") == "true" ? true : false;
        const cursor = axis ? ev.clientX : ev.clientY;
        let startingPoint = axis ? rectEl.x : rectEl.y;
        const singleCell = axis
          ? rectEl.width / element.getAttribute("data-size")
          : rectEl.height / element.getAttribute("data-size");
        let i = 1;
        while (startingPoint + singleCell < cursor) {
          startingPoint += singleCell;
          i++;
        }
        return {
          offset: i,
          size: +element.getAttribute("data-size"),
          axis: axis,
        };
      };
    },
    touchPlacement() {
      const board = game.human.board;
      const ships = this.shipsToPlace;
      const grid = document.querySelector(".fleetCreationScreen .grid");
      let selected;

      const selectEvHandler = (ev) => {
        ev.target.classList.add("selected");
        const axis =
          ev.target.getAttribute("data-axis") == "true" ? true : false;
        const size = +ev.target.getAttribute("data-size");
        selected = { offset: 1, axis: axis, size: size };
      };

      const dropEvHandler = (ev) => {
        if (ev.target.classList.contains("cell")) {
          if (selected) {
            const pushShip = this.populateGrid(selected, ev, board);
            const grid = document.querySelector(".grid");
            this.renderShips(this.shipsOnGrid, grid);
            this.giveShipToPlace(pushShip);
            if (pushShip) {
              selected = "";
              this.selected = false;
            }
          }
          if (game.IsReady(this.shipsOnGrid)) {
            game.newGame(this.shipsOnGrid);
            setTimeout(() => {
              this.changeScreen();
            }, 2000);
          }
        }
      };

      ships.forEach((ship) => {
        ship.addEventListener("click", selectEvHandler);
        this.eventListeners.push({
          elem: ship,
          type: "click",
          listener: selectEvHandler,
        });
      });

      grid.addEventListener("click", dropEvHandler);
      this.eventListeners.push({
        elem: grid,
        type: "click",
        listener: dropEvHandler,
      });
    },

    rotateDraggedGhostImg(ev) {
      const ghost = document.createElement("div");
      if (ev.target.children.length !== 0) {
        ev.target.removeChild(ev.target.firstChild);
      }
      ghost.style.position = "absolute";
      ghost.style.transform = "rotate(90deg)";
      ghost.style.pointerEvents = "none";

      const inner = ev.target.cloneNode(true);
      inner.style.pointerEvents = "none";
      ghost.appendChild(inner);

      const rect = ev.target.getBoundingClientRect();
      const x = ev.clientX - rect.left + rect.height / 2.8;
      const y = ev.clientY - rect.top;

      ev.target.appendChild(ghost);
      ev.dataTransfer.setDragImage(ghost, x, y);
    },
    changeScreen() {
      const startScreen = document.querySelector(".fleetCreationScreen");
      const gameScreen = document.querySelector(".gamePlayScreen");
      const overScreen = document.querySelector(".gameOverScreen");
      if (!game.IsReady(game.human.board.occupied)) {
        startScreen.style.display = "block";
        overScreen.classList.remove("slideDown");
        setTimeout(() => {
          overScreen.style.display = "none";
          startScreen.classList.remove("slideUp");
        }, 1300);
        this.renderGridContent(false);
      } else if (
        game.IsReady(game.human.board.occupied) &&
        !game.declareWinner()
      ) {
        startScreen.classList.add("slideUp");
        gameScreen.style.display = "flex";
        setTimeout(() => {
          gameScreen.classList.add("slideFromBeneath");
          startScreen.style.display = "none";
        }, 1300);
        this.renderGridContent(false);
      } else if (game.declareWinner()) {
        gameScreen.classList.remove("slideFromBeneath");
        overScreen.style.display = "block";
        setTimeout(() => {
          gameScreen.style.display = "none";
          overScreen.classList.add("slideDown");
        }, 1300);
        this.renderGridContent(true);
      }
    },
    renderGridContent(bool) {
      const over = bool ? "Over" : "";
      const playerGrid = document.querySelector(`.playerGrid${over}`);
      const computerGrid = document.querySelector(`.computerGrid${over}`);
      const playerBoard = game.human.board;
      const computerBoard = game.computer.board;
      const computerArray = bool
        ? computerBoard.occupied
        : computerBoard.sunken;
      this.clearGrids();
      this.renderGrid(playerBoard);
      this.renderMiss(playerBoard.visited, playerGrid);
      this.renderMiss(computerBoard.visited, computerGrid);
      this.renderAttacks(computerBoard.attacks, computerGrid);
      this.renderAttacks(playerBoard.attacks, playerGrid);
      this.renderHit(playerBoard.hits, playerBoard.attacks, playerGrid);
      this.renderHit(computerBoard.hits, computerBoard.attacks, computerGrid);
      this.renderShips(playerBoard.occupied, playerGrid);
      this.renderShips(computerArray, computerGrid);
      this.announceTurn(bool);
      this.announceScore(bool);
    },
    gridGameListeners() {
      const board = game.computer.board;
      const grid = document.querySelector(".computerGrid");

      const gridClickHandler = (ev) => {
        if (ev.target.classList.contains("cell")) {
          const cell = [
            +ev.target.getAttribute("data-x"),
            +ev.target.getAttribute("data-y"),
          ];
          if (board.checkCoords(cell) && !this.turnInProgress) {
            game.turn(cell);

            this.renderGridContent(false);
            this.turnInProgress = true;
            setTimeout(() => {
              if (game.declareWinner()) {
                this.gameOver();
                return;
              }
              this.alternateGrids();
            }, 900);

            setTimeout(() => {
              game.turn();

              this.renderGridContent(false);
              setTimeout(() => {
                if (game.declareWinner()) {
                  this.gameOver();
                  return;
                }
                this.turnInProgress = false;
                this.alternateGrids();
              }, 1500);
            }, 2100);
          }
        }
      };
      grid.addEventListener("click", gridClickHandler);
      this.eventListeners.push({
        elem: grid,
        type: "click",
        listener: gridClickHandler,
      });
    },
    announceTurn(bool) {
      const over = bool ? "Over" : "";
      const turnOutlet = document.querySelector(`.turnAnnouncement${over}`);
      turnOutlet.textContent = `Turn: ${game.turns}`;
    },
    announceScore(bool) {
      const over = bool ? "Over" : "";
      const computerScoreOutlet = document.querySelector(
        `.playerSunken${over}`
      );
      const playerScoreOutlet = document.querySelector(
        `.computerSunken${over}`
      );

      computerScoreOutlet.textContent = `${game.human.board.sunken.length} / ${game.human.board.occupied.length}`;
      playerScoreOutlet.textContent = `${game.computer.board.sunken.length} / ${game.computer.board.occupied.length}`;
    },
    alternateGrids() {
      const playerBoard = document.querySelector(".playerBoard");
      const computerBoard = document.querySelector(".computerBoard");

      if (playerBoard.classList.contains("highlight")) {
        playerBoard.classList.remove("highlight");
        if (window.innerWidth < 900) {
          computerBoard.parentElement.classList.remove("slideFromMid");
          playerBoard.parentElement.classList.remove("slideToMid");
        }

        computerBoard.classList.add("highlight");
        return;
      }
      if (computerBoard.classList.contains("highlight")) {
        computerBoard.classList.remove("highlight");
        playerBoard.classList.add("highlight");
        if (window.innerWidth < 900) {
          computerBoard.parentElement.classList.add("slideFromMid");
          playerBoard.parentElement.classList.add("slideToMid");
        }

        return;
      }
    },
    gameOver() {
      const winner = game.declareWinner();
      const winnerAnnouncement = document.querySelector(".winner");
      this.changeScreen();
      if (winner == "Human") {
        winnerAnnouncement.textContent = "Victory!";
      } else {
        winnerAnnouncement.textContent = "Defeat.";
      }
    },
    restartGameListener() {
      const restart = document.querySelector(".restartBtn");
      const restartEvHandler = () => {
        this.clearEventListeners();
        game.resetGame();
        this.turnInProgress = false;
        this.shipsToPlace.length = 0;
        this.shipsOnGrid.length = 0;
        this.changeScreen();
        this.createShipsToPlace();
        this.flipShip();
        if (this.isTouchDevice()) {
          this.touchPlacement();
        } else {
          this.dragElement();
        }
        this.giveShipToPlace();

        this.gridGameListeners();
        this.restartGameListener();
      };

      restart.addEventListener("click", restartEvHandler);
      this.eventListeners.push({
        elem: restart,
        type: "click",
        listener: restartEvHandler,
      });
    },
    initGame() {
      this.changeScreen();
      this.createShipsToPlace();
      this.flipShip();
      if (this.isTouchDevice()) {
        this.touchPlacement();
      } else {
        this.dragElement();
      }
      this.giveShipToPlace();
      this.gridGameListeners();
      this.restartGameListener();
      this.prepareBackGround();
      this.BGShots();
    },
    isTouchDevice() {
      if ("ontouchstart" in window || navigator.maxTouchPoints) {
        return true;
      } else {
        return false;
      }
    },
    placementTip() {
      const textOutput = document.querySelector(".textOutput");

      textOutput.textContent = "Too close to the edge or other ships";
    },
    prepareBackGround() {
      const ships = document.querySelectorAll(
        ".battleship, .cruiser, .destroyer"
      );
      const creationScreen = document.querySelector(".fleetCreationScreen");
      const batteries = document.querySelectorAll(".BGBattery");
      const bridges = document.querySelectorAll(".BGBridge");
      const guns = document.querySelectorAll(".BGGun");
      const missiles = document.querySelectorAll(".BGMissile");
      const missileRacks = document.querySelectorAll(".BGMissileRack");

      const iceBergs = document.querySelectorAll(".iceBerg");

      const startEventHandler = () => {
        ships.forEach((ship) => ship.classList.add("moveIn"));
        setTimeout(() => {
          ships.forEach((ship) => {
            ship
              .querySelectorAll(".BGGun")
              .forEach((gun) => gun.classList.add("rotateGuns"));
            ship
              .querySelectorAll(".BGMissile")
              .forEach((missile) => missile.classList.add("armMissiles"));
          });
          iceBergs.forEach((iceberg) => iceberg.classList.add("animateIce"));
        }, 2000);
      };

      const resetEventHandler = () => {
        const burnings = document.querySelectorAll(".burning");
        const holes = document.querySelectorAll(".hole");
        ships.forEach((ship) => {
          ship.classList.remove("BGSink");
          ship.classList.remove("moveIn");
        });
        batteries.forEach((battery) => battery.classList.remove("destroyed"));
        bridges.forEach((bridge) => bridge.classList.remove("destroyed"));
        missileRacks.forEach((missileRack) =>
          missileRack.classList.remove("destroyed")
        );
        guns.forEach((gun) => gun.classList.remove("rotateGuns"));
        missiles.forEach((missile) => missile.classList.remove("armMissiles"));
        burnings.forEach((burning) => burning.remove());
        holes.forEach((hole) => hole.remove());
        iceBergs.forEach((iceBerg) => iceBerg.classList.remove("animateIce"));
        resetGameBoard();
      };

      const resetGameBoard = () => {
        const playerBoard = document.querySelector(".playerBoard");
        const computerBoard = document.querySelector(".computerBoard");

        playerBoard.classList.remove("highlight");
        if (window.innerWidth < 900) {
          computerBoard.parentElement.classList.remove("slideFromMid");
          playerBoard.parentElement.classList.remove("slideToMid");
        }
        computerBoard.classList.add("highlight");
      };

      const config = { attributes: true, attributeFilter: ["class"] };

      const observer = new MutationObserver((mutationList, observer) => {
        mutationList.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
          ) {
            if (creationScreen.classList.contains("slideUp")) {
              startEventHandler();
            } else {
              resetEventHandler();
            }
          }
        });
      });

      observer.observe(creationScreen, config);
    },
    createBurning() {
      const burning = document.createElement("span");
      burning.classList.add("burning");
      const innerBurn = document.createElement("span");
      innerBurn.classList.add("brnInner");
      burning.appendChild(innerBurn);

      return burning;
    },
    createExplosion() {
      const hitExplosion = document.createElement("span");
      hitExplosion.classList.add("hitExplosion");
      const explSmoke = document.createElement("span");
      explSmoke.classList.add("explSmoke");
      hitExplosion.appendChild(explSmoke);
      const explosion = document.createElement("span");
      explosion.classList.add("explosion");
      hitExplosion.appendChild(explosion);
      const inner = document.createElement("span");
      inner.classList.add("explInner");
      explosion.appendChild(inner);
      return hitExplosion;
    },
    splashingMisses(fleet) {
      const playerActiveGuns = document.querySelectorAll(
        ".playerFleet .battleship:not(.BGSink) .BGGun,.playerFleet .cruiser:not(.BGSink) .BGGun"
      );
      const playerActiveMissiles = document.querySelectorAll(
        ".playerFleet .destroyer:not(.BGSink) .BGMissile"
      );
      const computerActiveGuns = document.querySelectorAll(
        ".computerFleet .battleship:not(.BGSink) .BGGun,.computerFleet .cruiser:not(.BGSink) .BGGun"
      );
      const computerActiveMissiles = document.querySelectorAll(
        ".computerFleet .destroyer:not(.BGSink) .BGMissile"
      );
      const activeGuns = fleet.classList.contains("playerFleet")
        ? playerActiveGuns
        : computerActiveGuns;
      const activeMissiles = fleet.classList.contains("playerFleet")
        ? playerActiveMissiles
        : computerActiveMissiles;

      for (let i = 1; i <= activeGuns.length + activeMissiles.length; i++) {
        const randomTop = Math.floor(Math.random() * (30 + 65)) - 65;
        const randomLeft = Math.floor(Math.random() * 99);
        const splash = document.createElement("span");
        splash.classList.add("splash");
        const inner = document.createElement("splashInner");
        inner.classList.add("splashInner");
        splash.appendChild(inner);
        splash.style.top = randomTop + "%";
        splash.style.left = randomLeft + "%";
        fleet.appendChild(splash);
      }
      setTimeout(() => {
        const splashes = fleet.querySelectorAll(".splash");
        splashes.forEach((splash) => splash.remove());
      }, 1000);
    },
    fireGunsLaunchMissiles(fleet) {
      const computerActiveShipsWGuns = document.querySelectorAll(
        ".computerFleet .battleship:not(.BGSink), .computerFleet .cruiser:not(.BGSink)"
      );
      const playerActiveShipsWGuns = document.querySelectorAll(
        ".playerFleet .battleship:not(.BGSink), .playerFleet .cruiser:not(.BGSink)"
      );
      const playerActiveShipsWMissiles = document.querySelectorAll(
        ".playerFleet .destroyer:not(.BGSink)"
      );
      const computerActiveShipsWMissiles = document.querySelectorAll(
        ".computerFleet .destroyer:not(.BGSink)"
      );
      const activeGunShips = fleet.classList.contains("playerFleet")
        ? playerActiveShipsWGuns
        : computerActiveShipsWGuns;
      const activeMissileShips = fleet.classList.contains("playerFleet")
        ? playerActiveShipsWMissiles
        : computerActiveShipsWMissiles;

      activeMissileShips.forEach((ship) => {
        const missiles = ship.querySelectorAll(".BGMissile");
        missiles.forEach((missile) => missile.classList.add("animateMissile"));

        setTimeout(() => {
          missiles.forEach((missile) =>
            missile.classList.remove("animateMissile")
          );
        }, 2000);
      });
      activeGunShips.forEach((ship) => {
        const batteries = ship.querySelectorAll(".BGBattery");
        batteries.forEach((battery) => {
          const gunFireCones = battery.querySelectorAll(".gunFireCone");
          gunFireCones.forEach((cone) => {
            cone.classList.add("animateFireCone");
            setTimeout(() => {
              cone.classList.remove("animateFireCone");
            }, 2000);
          });
          const gunFireSmokes = battery.querySelectorAll(".gunFireSmoke");
          gunFireSmokes.forEach((smoke) => {
            smoke.classList.add("animateFireSmoke");
            setTimeout(() => {
              smoke.classList.remove("animateFireSmoke");
            }, 2000);
          });
          const guns = battery.querySelectorAll(".BGGun");
          guns.forEach((gun) => {
            gun.classList.add("animateGun");
            setTimeout(() => {
              gun.classList.remove("animateGun");
            }, 2000);
          });
        });
      });
    },
    BGSink(ship) {
      const burns = ship.querySelectorAll(".burning");
      const holes = ship.querySelectorAll(".hole");
      if (burns.length > holes.length) {
        ship.classList.add("engulfed");
        for (let i = 1; i < 6; i++) {
          const burning = this.createBurning();
          const randomLeft = Math.floor(Math.random() * (70 - 15)) + 15;
          burning.style.left = randomLeft + "%";
          ship.querySelector(".body").appendChild(burning);
        }
        setTimeout(() => {
          const parts = ship.querySelectorAll(
            ".BGBridge, .BGBattery, .BGMissileRack"
          );
          parts.forEach((part) => part.classList.add("destroyed"));
        }, 800);
        setTimeout(() => {
          ship.classList.remove("engulfed");
        }, 5000);
      } else {
        ship.classList.add("detonating");
        for (let i = 1; i < 9; i++) {
          setTimeout(() => {
            const explosion = this.createExplosion();
            const randomLeft = Math.floor(Math.random() * (70 - 15)) + 15;
            explosion.style.left = randomLeft + "%";
            ship.appendChild(explosion);
          }, Math.floor(Math.random() * 600));
          setTimeout(() => {
            const parts = ship.querySelectorAll(
              ".BGBridge, .BGBattery, .BGMissileRack"
            );
            parts.forEach((part) => part.classList.add("destroyed"));
          }, 400);
        }
        setTimeout(() => {
          const explosions = ship.querySelectorAll(".hitExplosion");
          explosions.forEach((explosion) => explosion.remove());
        }, 3000);
        setTimeout(() => {
          ship.classList.remove("detonating");
        }, 5000);
      }
      setTimeout(() => {
        ship.classList.add("BGSink");
        ship.classList.remove("moveIn");
      }, 2500);
    },
    BGShots() {
      const computerGrid = document.querySelector(".computerGrid");
      const playerGrid = document.querySelector(".playerGrid");
      const computerFleet = document.querySelector(".computerFleet");
      const playerFleet = document.querySelector(".playerFleet");

      const config = {
        attributes: true,
        attributeFilter: ["class"],
        subtree: true,
      };
      const computerHits = game.human.board.hits;
      const computerAttacks = game.human.board.attacks;
      const playerHits = game.computer.board.hits;
      const playerAttacks = game.computer.board.attacks;

      const hitHandler = (fleet, coords) => {
        const coinFlip = Math.random() > 0.5 ? 1 : 0;
        const board =
          fleet == computerFleet ? game.computer.board : game.human.board;
        const theRightShip = board.occupied.filter(
          (obj) => obj.x.includes(coords[0]) && obj.y.includes(coords[1])
        );
        const shipId = theRightShip[0].id;
        const ship = fleet.querySelector(`[data-id="${shipId}"]`);
        const randomTop = Math.floor(Math.random() * (55 - 10)) + 10;
        const softerRandomTop = Math.floor(Math.random() * -20);
        const randomLeft = Math.floor(Math.random() * (70 - 15)) + 15;

        const hitExplosion = this.createExplosion();
        hitExplosion.style.top = randomTop + "%";
        hitExplosion.style.left = randomLeft + "%";
        ship.appendChild(hitExplosion);
        setTimeout(() => {
          hitExplosion.remove();
        }, 3300);

        const burning = this.createBurning();

        burning.style.left = randomLeft + "%";

        const hole = document.createElement("span");
        hole.classList.add("hole");
        hole.style.top = softerRandomTop + "%";
        hole.style.left = randomLeft + "%";

        const effect = coinFlip ? burning : hole;
        ship.querySelector(".body").appendChild(effect);
        if (theRightShip[0].isSunk) {
          this.BGSink(ship, hitExplosion, burning);
        }
      };

      const compObserver = new MutationObserver((mutationList, observer) => {
        const mutation = mutationList.pop();
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          computerGrid.parentElement.classList.contains("highlight")
        ) {
          this.fireGunsLaunchMissiles(playerFleet);

          setTimeout(() => {
            this.splashingMisses(computerFleet);
          }, 700);
          if (
            playerHits.length !== 0 &&
            playerHits[playerHits.length - 1][0] ===
              playerAttacks[playerAttacks.length - 1][0] &&
            playerHits[playerHits.length - 1][1] ===
              playerAttacks[playerAttacks.length - 1][1]
          ) {
            setTimeout(() => {
              hitHandler(
                computerFleet,
                playerAttacks[playerAttacks.length - 1]
              );
            }, 700);
          }
        }
      });

      const PlayerObserver = new MutationObserver((mutationList, observer) => {
        const mutation = mutationList.pop();

        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          playerGrid.parentElement.classList.contains("highlight")
        ) {
          this.fireGunsLaunchMissiles(computerFleet);
          setTimeout(() => {
            this.splashingMisses(playerFleet);
          }, 700);
          if (
            computerHits.length !== 0 &&
            computerHits[computerHits.length - 1][0] ===
              computerAttacks[computerAttacks.length - 1][0] &&
            computerHits[computerHits.length - 1][1] ===
              computerAttacks[computerAttacks.length - 1][1]
          ) {
            setTimeout(() => {
              hitHandler(
                playerFleet,
                computerAttacks[computerAttacks.length - 1]
              );
            }, 700);
          }
        }
      });

      PlayerObserver.observe(playerGrid, config);
      compObserver.observe(computerGrid, config);
    },
  };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");




const game = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.Game)();
const renderGame = (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderGame)(game);
renderGame.initGame();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map