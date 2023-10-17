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
      }
    },
  };
};
export const Board = () => {
  return {
    visited: [],
    occupied: [],
    placeShip(x, y, size, axis) {
      const newShip = Ship(size, axis);
      if (newShip.xAxis) {
        newShip.y.push(y);
        for (let i = 0; i <= newShip.size - 1; i++) {
          newShip.x.push(x + i);
        }
      } else {
        newShip.x.push(x);
        for (let i = 0; i <= newShip.size - 1; i++) {
          newShip.y.push(y + i);
        }
      }
      this.occupied.push(newShip);
    },
  };
};
