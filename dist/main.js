/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        cell.textContent = "*";
      });
    },
    renderHit(array, grid) {
      array.forEach((item) => {
        const gridArray = Array.from(grid.children);
        const cell = gridArray.find(
          (child) =>
            child.getAttribute("data-x") == item[0] &&
            child.getAttribute("data-y") == item[1]
        );
        cell.style.backgroundColor = "hsla(271, 76%, 53%, 0.274)";
        cell.style.border = "3px solid hsla(271, 76%, 53%, 0.774)";
        cell.textContent = "X";
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
        cell.style.backgroundColor = "rgba(0, 0, 0, 0.356)";
        cell.textContent = "+";
        if (item == array[array.length - 1]) {
          cell.style.color = "red";
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
        gameScreen.style.display = "block";
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
      this.renderHit(playerBoard.hits, playerGrid);
      this.renderHit(computerBoard.hits, computerGrid);
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
        computerBoard.parentElement.classList.remove("slideFromMid");
        playerBoard.parentElement.classList.remove("slideToMid");
        computerBoard.classList.add("highlight");
        return;
      }
      if (computerBoard.classList.contains("highlight")) {
        computerBoard.classList.remove("highlight");
        playerBoard.classList.add("highlight");
        computerBoard.parentElement.classList.add("slideFromMid");
        playerBoard.parentElement.classList.add("slideToMid");
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
/******/ 			// no module.id needed
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



const game = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.Game)();
const renderGame = (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderGame)(game);
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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map