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
    sunken: 0,
    isOver() {
      if (this.sunken >= this.occupied.length) {
        return true;
      }
      return false;
    },
    placeShip(x, y, size, axis) {
      const canBePlaced = (x, y, size, axis) => {
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
      };

      if (canBePlaced(x, y, size, axis)) {
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
    IncomingAttack(x, y) {
      if (this.visited.some((pair) => pair[0] === x && pair[1] === y)) {
        return false;
      }
      const markAdjacent = (coordsObject, sunk) => {
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
      };

      this.visited.push([x, y]);

      const theRightShip = this.occupied.filter(
        (obj) => obj.x.includes(x) && obj.y.includes(y)
      );
      if (theRightShip[0]) {
        theRightShip[0].wasHit();
        if (theRightShip[0].wasSunk()) {
          let marks = markAdjacent(
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

          this.sunken++;
        }
        let marks = markAdjacent({ x: [x], y: [y] }, false);

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
        return true;
      }
      return false;
    },
  };
};
