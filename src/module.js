const Ship = (length) => {
  let numHits = 0;
  let sunk = false;
  function getHit() {
    return this.numHits;
  }
  function setHit() {
    this.numHits++;
    this.setSunk();
  }
  function getSunk() {
    return this.sunk;
  }
  function setSunk() {
    if (this.numHits >= length) this.sunk = true;
  }
  return {
    length: length,
    numHits: numHits,
    sunk: sunk,
    getHit,
    setHit,
    getSunk,
    setSunk,
  };
};

const GameBoard = (name, boardID) => {
  function createBoardObject() {
    for (let x = 0; x < 10; x++) {
      this[`col${x}`] = {};
      for (let y = 0; y < 10; y++) {
        this[`col${x}`][`row${y}`] = [x, y];
        this[`col${x}`][`row${y}`].hit = false;
        this[`col${x}`][`row${y}`].ship = false;
        this[`col${x}`][`row${y}`].shipHit = false;
      }
    }
    return;
  }
  function createBoardDiv() {
    const boardDiv = document.querySelector(`.${name}`);
    for (let y = 9; y >= 0; y--) {
      for (let x = 0; x < 10; x++) {
        let square = document.createElement("div");
        square.className = "square";
        square.id = `${boardID}.${x},${y}`;
        square.textContent = `${x},${y}`;
        boardDiv.appendChild(square);
      }
    }
  }
  function getHit(x, y) {
    return this[`col${x}`][`row${y}`].hit;
  }
  function setHit(x, y) {
    this[`col${x}`][`row${y}`].hit = true;
    this.setShipHit(x, y);
  }
  function getShipHit(x, y) {
    return this[`col${x}`][`row${y}`].shipHit;
  }
  function setShipHit(x, y) {
    if (
      this[`col${x}`][`row${y}`].hit == true &&
      this[`col${x}`][`row${y}`].ship == true
    ) {
      this[`col${x}`][`row${y}`].shipHit = true;
    }
  }
  function getShip(x, y) {
    return this[`col${x}`][`row${y}`].ship;
  }
  function setShip() {}
  return {
    name: name,
    boardID: boardID,
    createBoardObject,
    createBoardDiv,
    getHit,
    setHit,
    getShip,
    setShip,
    getShipHit,
    setShipHit,
  };
};

const Player = (name) => {
  let ships = {
    ship1: Ship(1),
    ship2: Ship(2),
    ship3: Ship(3),
    ship4: Ship(4),
  };
  return { name: name, ships: ships };
};

module.exports = {
  Ship,
  GameBoard,
  Player,
};
