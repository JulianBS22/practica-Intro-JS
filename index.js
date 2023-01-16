//crea los 4 tableros
console.log("**************************************");
console.log("*********SpaceBattleship Game*********");
console.log("**************************************");

const ROWS = 10;
const COLS = 10;
let board = [];
const ship = "🛸🛸🛸🛸🛸";
const shipLength = ship.length;

function printBoard(board) {
  for (let i = 0; i < ROWS; i++) {
    let row = [];
    for (let j = 0; j < COLS; j++) {
      row[j] = "🌠";
    }
    console.log(row.join(""));
    board[i] = row;
  }
}
function printBoard(board) {
  let shipLocations = [];
  for (let i = 0; i < ROWS; i++) {
    let row = [];
    for (let j = 0; j < COLS; j++) {
      row[j] = "🌠";
    }
    board[i] = row;
  }


    let shipsToPlace = 2
    for (let i = 0; i < shipsToPlace; i++) {
      let x = Math.floor(Math.random() * ROWS);
      let y = Math.floor(Math.random() * COLS);
      let isHorizontal = Math.random() >= 0.5;
      let isValidPosition = true;

      // Check if ship fits on board
      if (isHorizontal && y + shipLength > COLS) {
        isValidPosition = false;
      } else if (!isHorizontal && x + shipLength > ROWS) {
        isValidPosition = false;
      }

      // Check if ship overlaps with other ships
      for (let j = 0; j < shipLength; j++) {
        if (isHorizontal) {
          if (shipLocations.some((location) => location[0] === x && location[1] === y + j)) {
            isValidPosition = false;
            break;
          }
        } else {
          if (shipLocations.some((location) => location[0] === x + j && location[1] === y)) {
            isValidPosition = false;
            break;
          }
        }
      }

      // Place ship on board
      if (isValidPosition) {
        for (let j = 0; j < shipLength; j++) {
          if (isHorizontal) {
            shipLocations.push([x, y + j]);
            board[x][y + j] = ship;
          } else {
            shipLocations.push([x + j, y]);
            board[x + j][y] = ship;
            console.log(ship)
          }
        }
      } else {
        i--;
      }
    }
}
printBoard(board)
  /*
  //Math.floor((Math.random() * (ROWS * COLS)) / 2);
  for (let i = 0; i < shipsToPlace; i++) {
    let x = Math.floor(Math.random() * ROWS);
    let y = Math.floor(Math.random() * COLS);
    if (
      !shipLocations.some((location) => location[0] === x && location[1] === y)
    ) 
    if (shipLocations<shipLength)
      {
        shipLocations.push([x, y]);
        board[x][y] = ship 
      } 
    else {
      i--;
    }
  }
  for (let i = 0; i < ROWS; i++) {
    console.log(board[i].join(""));
  }
}

/*function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}*/

printBoard(board);
//board = shuffle(board)
//printShip(board)


//shipsArray.shuffle(ships);
//console.log(board)
//crea los 2 jugadores
//crea los objetos barcos
//distribuye los barcos al azar
//rellena los huecos con agua
//inicializa el juego
//inicia disparo
//comprueba y dibuja disparo
//comprueba y dibuja disparo al agua, barco tocado o barco hundido
//mensajes de eventos del disparo
//cambio turno jugador
//disparo jugador 2 y bucle
//comprobar si todos los barcos siguen a flote
//seguir turnos o acabar partida
//mostrar ganador