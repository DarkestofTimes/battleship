export const Ship = (num, bool) => {
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

export const Board = () => {
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

export const Player = (type) => {
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

export const Game = () => {
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
