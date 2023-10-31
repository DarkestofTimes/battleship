import { Ship, Board, Player, Game } from "./game.js";

export const RenderGame = (game) => {
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
