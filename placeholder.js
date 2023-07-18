class knight {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.moves = [];
  }

  getAvalMoves() {
    let nextMoveArray = [];
    let horr = this.x;
    let vert = this.y;

    for (let i = 0; i < 8; i++) {
      switch (i) {
        case 0:
          horr += 2;
          vert += 1;
          break;
        case 1:
          horr += 1;
          vert += 2;
          break;
        case 2:
          horr -= 2;
          vert -= 1;
          break;
        case 3:
          horr -= 1;
          vert -= 2;
          break;
        case 4:
          horr += 1;
          vert -= 2;
          break;
        case 5:
          horr -= 1;
          vert += 2;
          break;
        case 6:
          horr += 2;
          vert -= 1;
          break;
        case 7:
          horr -= 2;
          vert += 1;
          break;
        default:
          break;
      }

      if (horr > 7 || horr < 0 || vert > 7 || vert < 0) {
      } else {
        nextMoveArray.push([horr, vert]);
      }
      horr = this.x;
      vert = this.y;
    }
    return nextMoveArray;
  }
}

const start = [0, 0];
const end = [3, 3];

const newKnight = new knight();

newKnight.x = start[0];
newKnight.y = start[1];

newKnight.moves.push(start)

let avalMoves = newKnight.getAvalMoves();

for (let i = 0; i < avalMoves.length; i++) {
  if (avalMoves[i][0] == end[0] && avalMoves[i][1] == end[1]) {
    console.log("Done");
  }
}

newKnight.x = avalMoves[0][0];
newKnight.y = avalMoves[0][1];

newKnight.moves.push(avalMoves[0])

let avalMoves2 = newKnight.getAvalMoves();

for (let i = 0; i < avalMoves2.length; i++) {
  if (avalMoves2[i][0] == end[0] && avalMoves2[i][1] == end[1]) {
    console.log("Done");
  }
}

newKnight.moves.push(end)

console.log(newKnight.moves)