const gameboard = [];

function knightsNextMove(arr) {
  let nextMoveArray = [];

  let horr = arr[0];
  let vert = arr[1];

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
    horr = arr[0];
    vert = arr[1];
  }

  return nextMoveArray;
}

console.log(knightsNextMove([1, 1]));
