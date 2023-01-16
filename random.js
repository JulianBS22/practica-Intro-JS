// Create an array of ships' names
let shipsArray = [];
for (let ship in ships) {
  shipsArray.push(ship);
}

// Shuffle the ships' names
shipsArray.shuffle();

// Place the ships on the board
for (let i = 0; i < shipsArray.length; i++) {
  let ship = shipsArray[i];
  let x = Math.floor(Math.random() * ROWS);
  let y = Math.floor(Math.random() * COLS);
  for (let j = 0; j < ships[ship].size; j++) {
    if (x + j < ROWS && board[x + j][y] === "[  ]") {
      board[x + j][y] = "[" + ships[ship].name[0] + "]";
    }
  }
}



---------------------------------

// Create an array of ships' names
let shipsArray = [];
for (let ship in ships) {
  shipsArray.push(ship);
}

// Shuffle the ships' names
shipsArray.shuffle();

// Place the ships on the board
for (let i = 0; i < shipsArray.length; i++) {
  let ship = shipsArray[i];
  let x = Math.floor(Math.random() * ROWS);
  let y = Math.floor(Math.random() * COLS);
  for (let j = 0; j < ships[ship].size; j++) {
    if (x + j < ROWS && board[x + j][y] === "[  ]") {
      board[x + j][y] = "[" + ships[ship].name[0] + "]";
    }
  }
}
--------------------

for (let i = 0; i < shipsArray.length; i++) {
    let ship = shipsArray[i];
    let x = Math.floor(Math.random() * ROWS);
    let y = Math.floor(Math.random() * COLS);
    for (let j = 0; j < ships[ship].size; j++) {
      if (x + j < ROWS) {
        if (board[x + j][y] === "[  ]") {
          board[x + j][y] = "[" + ships[ship].name[0] + "]";
        } else {
          console.log("Position occupied at: x=" + (x + j) + " y=" + y);
        }
      }
    }
  }
  

  -----------------------

  for (let i = 0; i < shipsArray.length; i++) {
    let ship = shipsArray[i];
    let x = Math.floor(Math.random() * ROWS);
    let y = Math.floor(Math.random() * COLS);
    let shipPlaced = true;
    for (let j = 0; j < ships[ship].size; j++) {
      if (x + j < ROWS) {
        if (board[x + j][y] === "[  ]") {
          board[x + j][y] = "[" + ships[ship].name[0] + "]";
        } else {
          console.log("Position occupied at: x=" + (x + j) + " y=" + y);
          shipPlaced = false;
          break;
        }
      }
    }
    if (!shipPlaced) {
      i--;
    }
  }
  ////
  ///la de la practica
// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {

//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }

//     return array;
// }  