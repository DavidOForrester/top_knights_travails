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

function knightMoves(start, end) {
  const newKnight = new knight();

  newKnight.x = start[0];
  newKnight.y = start[1];

  console.log(newKnight.getAvalMoves());

  //console.log(newKnight.moves);
}

const start = [1, 0];
const end = [7, 7];

const moves = knightMoves(start, end);
