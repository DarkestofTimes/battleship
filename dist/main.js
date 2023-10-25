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
      if (this.sunken.length >= this.occupied.length) {
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
    excludeCells(coord, board) {
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
    },
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
    searchPattern(board) {
      const tempX = [];
      const tempY = [];
      const arrayOfArrays = [];
      const grid = board.createGrid();
      const filteredCoords = grid.filter((element) => {
        return !board.visited.some(
          (pair) => pair[0] === element[0] && pair[1] === element[1]
        );
      });
      const alive = board.occupied.filter((ship) => {
        return ship.isSunk === false;
      });
      const biggest = alive.sort((a, b) => a.size - b.size)[0].size;

      const coordsByY = [...filteredCoords].sort((a, b) => a[1] - b[1]);

      function processArray(arr, tempArr, arrayOfArrays) {
        for (let i = 0; i < arr.length; i++) {
          const current = arr[i];
          const previous = i > 0 ? arr[i - 1] : arr[i];
          const next = i < arr.length - 1 ? arr[i + 1] : arr[i];

          if (current[1] === previous[1] && current[0] === previous[0] + 1) {
            tempArr.push([current[0], current[1]]);
          }
          if (
            current[0] !== next[0] - 1 ||
            (current[1] !== next[1] &&
              current[1] === previous[1] &&
              current[0] === previous[0] + 1)
          ) {
            arrayOfArrays.push([...tempArr]);
            tempArr.length = 0;
          }
        }
      }

      processArray(coordsByY, tempY, arrayOfArrays);
      processArray(filteredCoords, tempX, arrayOfArrays);

      const biggerThanBiggest = arrayOfArrays.filter(
        (array) => array.length >= biggest
      );

      const targetArrays = biggerThanBiggest.sort(
        (a, b) => b.length - a.length
      );
      if (targetArrays.length !== 0) {
        if (biggest <= 3) {
          const random = Math.floor(Math.random() * targetArrays.length);
          const targetCoords =
            targetArrays[random][
              Math.floor(targetArrays[random].length / 2 - 1)
            ];
          return { x: targetCoords[0], y: targetCoords[1] };
        }
      } else {
        return false;
      }
    },

    commitAttack(board, input = this.searchPattern(board)) {
      //ATTACK
      this.nextTarget = this.nextTarget.filter((element) => {
        return !board.visited.some(
          (pair) => pair[0] === element.x && pair[1] === element.y
        );
      });

      let coords = input;

      const excluded = this.excludeCells(coords, board);
      const excludedAndVisited = [...board.visited, ...excluded];
      while (
        excludedAndVisited.some(
          (pair) => pair[0] === coords.x && pair[1] === coords.y
        )
      ) {
        coords = this.calcTargetCoords(board);
      }

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
      }
      return false;
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
        const ship = document.createElement("div");
        ship.classList.add(`ship${item.size}`, "ship");
        ship.classList.add(`${item.axis ? "horizontal" : "vertical"}`);
        if (item.isSunk == true) {
          ship.classList.add("sunk");
        }
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
          cell.style.color = "yellow";
        }
      });
    },
    flipShip() {
      const ships = this.shipsToPlace;
      const flipHandler = (ev) => {
        if (ev.target.style.transform == "rotate(90deg)") {
          ev.target.setAttribute("data-axis", "true");
          ev.target.style.transform = "none";
        } else {
          ev.target.setAttribute("data-axis", "false");
          ev.target.style.transform = "rotate(90deg)";
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
        const ship = document.createElement("div");
        const size = sizes.shift();
        ship.setAttribute("data-size", size);
        ship.setAttribute("data-axis", true);
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
      count.textContent = this.shipsToPlace.length;
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
      const axis = draggedOffset.axis == "true" ? true : false;
      const offsetX = axis
        ? ev.target.getAttribute("data-x") - draggedOffset.offset + 1
        : +ev.target.getAttribute("data-x");
      const offsetY = axis
        ? +ev.target.getAttribute("data-y")
        : ev.target.getAttribute("data-y") - draggedOffset.offset + 1;
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
      const axis = draggedOffset.axis == "true" ? true : false;
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

    dragElement(board) {
      const ships = this.shipsToPlace;
      const grid = document.querySelector(".fleetCreationScreen .grid");
      let draggedOffset;

      const dragStartEvHandler = (ship, ev) => {
        draggedOffset = calculateOffset(ship, ev);
        if (draggedOffset.axis == "false") {
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
              this.changeScreen(game);
              this.gridGameListeners(game);
            }, 1000);
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
          axis: element.getAttribute("data-axis"),
        };
      };
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
    changeScreen(game) {
      const startScreen = document.querySelector(".fleetCreationScreen");
      const gameScreen = document.querySelector(".gamePlayScreen");
      if (!game.IsReady(game.human.board.occupied)) {
        startScreen.style.display = "block";
        startScreen.classList.remove("slideUp");
        gameScreen.style.display = "none";
        gameScreen.classList.remove("slideDown");
      } else {
        startScreen.classList.add("slideUp");
        gameScreen.style.display = "block";
        setTimeout(() => {
          gameScreen.classList.add("slideDown");
          startScreen.style.display = "none";
        }, 1300);

        this.renderGridContent(game);
      }
    },
    renderGridContent(game) {
      const playerGrid = document.querySelector(".playerGrid");
      const computerGrid = document.querySelector(".opponentGrid");
      const playerBoard = game.human.board;
      const computerBoard = game.computer.board;
      this.clearGrids();
      this.renderGrid(playerBoard);
      this.renderMiss(playerBoard.visited, playerGrid);
      this.renderMiss(computerBoard.visited, computerGrid);
      this.renderAttacks(computerBoard.attacks, computerGrid);
      this.renderAttacks(playerBoard.attacks, playerGrid);
      this.renderHit(playerBoard.hits, playerGrid);
      this.renderHit(computerBoard.hits, computerGrid);
      this.renderShips(playerBoard.occupied, playerGrid);
      this.renderShips(computerBoard.sunken, computerGrid);
      this.announceTurn(game);
      this.announceScore(game);
    },
    gridGameListeners(game) {
      const board = game.computer.board;
      const grid = document.querySelector(".opponentGrid");

      const gridClickHandler = (ev) => {
        if (ev.target.classList.contains("cell")) {
          const cell = [
            +ev.target.getAttribute("data-x"),
            +ev.target.getAttribute("data-y"),
          ];
          if (board.checkCoords(cell) && !this.turnInProgress) {
            game.turn(cell);
            this.renderGridContent(game);
            this.turnInProgress = true;
            setTimeout(() => this.alternateGrids(), 900);

            setTimeout(() => {
              game.turn();
              this.renderGridContent(game);
              setTimeout(() => {
                this.turnInProgress = false;
                this.alternateGrids();
              }, 2200);
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
    announceTurn(game) {
      const turnOutlet = document.querySelector(".turnAnnouncement");
      turnOutlet.textContent = `Turn: ${game.turns}`;
    },
    announceScore(game) {
      const computerScoreOutlet = document.querySelector(".playerSunken");
      const playerScoreOutlet = document.querySelector(".opponentSunken");

      computerScoreOutlet.textContent = `${game.human.board.sunken.length} / ${game.human.board.occupied.length}`;
      playerScoreOutlet.textContent = `${game.computer.board.sunken.length} / ${game.computer.board.occupied.length}`;
    },
    alternateGrids() {
      const playerBoard = document.querySelector(".playerBoard");
      const computerBoard = document.querySelector(".opponentBoard");

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
const board = game.human.board;
const renderGame = (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderGame)(game);
renderGame.changeScreen(game);
renderGame.renderGrid(board); //add event listener to trigger rerendering on screen resize
renderGame.createShipsToPlace();
renderGame.dragElement(board);
renderGame.giveShipToPlace();
renderGame.flipShip();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map