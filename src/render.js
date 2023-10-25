import { Ship, Board, Player, Game } from "./game.js";

export const RenderGame = (game) => {
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
