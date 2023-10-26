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
          cell.style.color = "red";
        }
      });
    },
    flipShip() {
      const ships = this.shipsToPlace;

      const flipHandler = (ev) => {
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
            }, 1000);
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
