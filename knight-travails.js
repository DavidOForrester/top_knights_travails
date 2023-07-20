function getAvalMoves(location) {
  let nextMoveArray = [];
  let horr = location[0];
  let vert = location[1];

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
    horr = location[0];
    vert = location[1];
  }
  return nextMoveArray;
}

function searchTree(element, match) {
  if (element.data[0] == match[0] && element.data[1] == match[1]) {
    console.log(element);
    return null;
  } else if (element.descendants != null) {
    let i;
    let result = null;
    for (i = 0; result == null && i < element.descendants.length; i++) {
      result = searchTree(element.descendants[i], match);
    }
  }
}

class Knight {
  constructor(data) {
    this.data = data;
    this.moves = 0;
    this.descendants = [];
  }
}

class Board {
  constructor(arr) {
    this.start = arr;
  }

  buildMoves(arr) {
    function findDescendants(arr) {
      for (let j = 0; j < arr.length; j++) {
        let moves = getAvalMoves(arr[j]);
        for (let i = 0; i < moves.length; i++) {
          const knightnext = new Knight(moves[i]);
          knightnext.moves = 2
          knight.descendants[j].descendants.push(knightnext);
        }
        for (let k = 0; k < moves.length; k++) {
          let moves2 = getAvalMoves(moves[k]);
          for (let i = 0; i < moves2.length; i++) {
            const knightnext = new Knight(moves2[i]);
            knightnext.moves = 3
            knight.descendants[j].descendants[k].descendants.push(knightnext);
          }
        }
      }
    }

    const knight = new Knight(arr);

    let moves = getAvalMoves(arr);

    for (let i = 0; i < moves.length; i++) {
      const knightnext = new Knight(moves[i]);
      knightnext.moves = 1
      knight.descendants.push(knightnext);
    }

    findDescendants(moves);

    return knight;
  }
}

function knightMoves(start, end) {
  let board = new Board(start);

  knight = board.buildMoves(start);

  searchTree(knight, end);
}

knightMoves([0, 0], [4, 3]);
