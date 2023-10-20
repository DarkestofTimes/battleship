export const Ship = (num, bool) => {
  return {
    size: num,
    hits: 0,
    isSunk: false,
    xAxis: bool,
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

export const Board = () => {
  return {
    visited: [],
    occupied: [],
    sunken: [],
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
    canBePlaced(x, y, size, axis) {
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

      const matchingCoords = this.occupied.filter((obj) =>
        mappedDirections.some(
          (coord) => obj.x.includes(coord.x) && obj.y.includes(coord.y)
        )
      );

      if (axis && x + size - 1 > 9) {
        return false;
      }
      if (!axis && y + size - 1 > 9) {
        return false;
      }
      if (matchingCoords.length !== 0) {
        return false;
      }
      return true;
    },
    placeShip(x, y, size, axis) {
      //place
      if (this.canBePlaced(x, y, size, axis)) {
        const newShip = Ship(size, axis);
        if (newShip.xAxis) {
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

    IncomingAttack(x, y) {
      // attack
      if (this.visited.some((pair) => pair[0] === x && pair[1] === y)) {
        return false;
      }
      this.visited.push([x, y]);

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
              !this.visited.some(
                (pair) => pair[0] === mark[0] && pair[1] === mark[1]
              ) &&
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
            !this.visited.some(
              (pair) => pair[0] === mark[0] && pair[1] === mark[1]
            ) &&
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
        const lostShip = this.sunken.pop();
        return lostShip;
      }
      return false;
    },
  };
};

export const Player = (type) => {
  return {
    current: false,
    type: type,
    nextTarget: [],
    hits: [],
    possibleTargets(coords) {
      const filterByAxis = (axis) => {
        let filtered;
        if (axis == "y") {
          filtered = this.nextTarget.filter((obj) => {
            obj.y == coords.y;
          });
        } else {
          filtered = this.nextTarget.filter((obj) => {
            obj.x == coords.x;
          });
        }
        return filtered;
      };

      let directions = [
        { dx: -1, dy: 0 },
        { dx: 1, dy: 0 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 },
      ];
      const prevHits = [...this.hits];
      const lastHit = prevHits.pop();
      let filteredCoords = [];

      if (lastHit && lastHit.x == coords.x) {
        // ship is on y axis
        directions = [
          { dx: 0, dy: -1 },
          { dx: 0, dy: 1 },
        ];
        const filtered = filterByAxis("x");
        filtered.forEach((elem) => filteredCoords.push(elem));
      } else if (lastHit && lastHit.y == coords.y) {
        // ship is on x axis
        directions = [
          { dx: -1, dy: 0 },
          { dx: 1, dy: 0 },
        ];
        const filtered = filterByAxis("y");
        filtered.forEach((elem) => filteredCoords.push(elem));
      }

      const mappedCoords = directions.map((direction) => ({
        x: coords.x + direction.dx,
        y: coords.y + direction.dy,
      }));
      mappedCoords.forEach((coord) =>
        filteredCoords.splice(filteredCoords.length - 3, 0, coord)
      );
      const validCoords = filteredCoords.filter((obj) => {
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

      for (let i = 0; i < filteredCoords.length; i++) {
        const currentX = filteredCoords[i];
        const previousX = i > 0 ? filteredCoords[i - 1] : filteredCoords[i];
        const nextX =
          i < filteredCoords.length - 1 ? filteredCoords[i + 1] : null;
        const currentY = coordsByY[i];
        const previousY = i > 0 ? coordsByY[i - 1] : coordsByY[i];
        const nextY = i < coordsByY.length - 1 ? coordsByY[i + 1] : null;

        if (
          !previousY ||
          (currentY[1] === previousY[1] && currentY[0] === previousY[0] + 1)
        ) {
          tempY.push([currentY[0], currentY[1]]);
        }
        if (
          //prettier-ignore
          !nextY ||
          currentY[0] !== nextY[0] - 1 ||
          currentY[1] !== nextY[1] &&
            currentY[1] === previousY[1] &&
            currentY[0] === previousY[0] + 1
        ) {
          arrayOfArrays.push([...tempY]);
          tempY.length = 0;
        }
        if (
          !previousX ||
          (currentX[0] === previousX[0] && currentX[1] === previousX[1] + 1)
        ) {
          tempX.push([currentX[0], currentX[1]]);
        }
        if (
          //prettier-ignore
          !nextY ||
          currentX[0] !== nextX[0] ||
          currentX[1] !== nextX[1] - 1 &&
            currentY[1] === previousY[1] + 1 &&
            currentY[0] === previousY[0]
        ) {
          arrayOfArrays.push([...tempX]);

          tempX.length = 0;
        }
      }

      const biggerThanBiggest = arrayOfArrays.filter(
        (array) => array.length >= biggest
      );

      const targetArrays = biggerThanBiggest.sort(
        (a, b) => b.length - a.length
      );
      console.log(targetArrays);
      if (targetArrays.length !== 0) {
        const random = Math.floor(Math.random() * targetArrays.length);
        const targetCoords =
          biggest < 4
            ? targetArrays[random][Math.floor(targetArrays[random].length / 2)]
            : targetArrays[0][Math.floor(targetArrays[0].length / 2)];
        return { x: targetCoords[0], y: targetCoords[1] };
      } else {
        return false;
      }
    },

    commitAttack(board, input = this.calcTargetCoords(board)) {
      //ATTACK
      this.nextTarget = this.nextTarget.filter((element) => {
        return !board.visited.some(
          (pair) => pair[0] === element.x && pair[1] === element.y
        );
      });

      let coords = input;
      const searchTarget = this.searchPattern(board);

      const excluded = this.excludeCells(coords, board);
      const excludedAdnVisited = [...board.visited, ...excluded];
      while (
        excludedAdnVisited.some(
          (pair) => pair[0] === coords.x && pair[1] === coords.y
        )
      ) {
        coords = this.calcTargetCoords(board);
      }

      if (searchTarget && !coords) {
        coords = this.searchPattern(board);
      }
      if (this.nextTarget.length !== 0) {
        coords = this.nextTarget.pop();
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
    over: false,
    computer: computer,
    human: human,
    newGame() {
      computer.player.createFleet(computer.board);
      human.player.createFleet(human.board);
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
    turn() {
      if (!this.over) {
        if (computer.player.current == false && human.player.current == false) {
          human.player.current = true;
          return human.player.type;
        }
        if ((computer.player.current = true)) {
          computer.player.commitAttack(human.board);
          computer.player.current = false;
          human.player.current = true;
          return computer.player.type;
        }
        if ((human.player.current = true)) {
          human.player.commitAttack(computer.board);
          human.player.current = false;
          computer.player.current = true;
          return human.player.type;
        }
        return false;
      }
    },
  };
};
