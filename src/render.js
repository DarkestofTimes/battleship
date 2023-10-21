import { Ship, Board, Player, Game } from "./game.js";

export const RenderGame = () => {
  return {
    shipsOnGrid: [],
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
    checkIfCanBePlaced(draggedOffset, ev, board) {
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

      cells.push(ev.target);
      for (let i = 0; i <= draggedOffset.offset - 1; i++) {
        const cell = document.querySelector(
          `[data-x='${x - i}'][data-y='${y}']`
        );
        if (cell) {
          cells.push(cell);
        }
      }
      for (let i = 0; i <= offsetBehind; i++) {
        const cell = document.querySelector(
          `[data-x='${x + i}'][data-y='${y}']`
        );
        if (cell) {
          cells.push(cell);
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
      const ships = document.querySelectorAll(".fleetCreationScreen .ship");
      const grid = document.querySelector(".fleetCreationScreen .grid");
      let draggedOffset;

      ships.forEach((ship) => {
        ship.addEventListener("dragstart", (ev) => {
          draggedOffset = calculateOffset(ship, ev);
        });
      });

      grid.addEventListener("dragover", (ev) => {
        ev.preventDefault();
      });

      grid.addEventListener("dragenter", (ev) => {
        if (ev.target.classList.contains("cell")) {
          this.highlightCells(draggedOffset, ev, board);
        }
      });

      grid.addEventListener("dragleave", (ev) => {
        if (ev.target.classList.contains("cell")) {
          this.highlightCells(draggedOffset, ev, board);
        }
      });

      grid.addEventListener("drop", (ev) => {
        ev.preventDefault();
        if (ev.target.classList.contains("cell")) {
          this.highlightCells(draggedOffset, ev, board);
          const pushShip = this.populateGrid(draggedOffset, ev, board);
        }
      });

      const calculateOffset = (element, ev) => {
        const rectEl = element.getBoundingClientRect();
        const cursor =
          element.getAttribute("data-axis") == "true" ? ev.clientX : ev.clientY;
        let startingPoint =
          element.getAttribute("data-axis") == "true" ? rectEl.x : rectEl.y;
        const singleCell = rectEl.width / element.getAttribute("data-size");
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
  };
};

const board = Board();
const startGame = RenderGame();
startGame.renderGrid(board);
startGame.dragElement(board);
