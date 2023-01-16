const ROWS = 10
const COLS = 10
let board = []
const ships = {
    ship1: {
      name: 'Imperial Destroyer',
      size: 5
    },
    ship2: {
      name: 'Dreadnaught-Class Heavy Cruiser',
      size: 4
    },
    ship3: {
      name: 'Millennium Falcon',
      size: 3
    },
    ship4: {
        name: 'X-wing',
        size: 2
    },
    ship5: {
        name:'Pod',
        size: 1
    }
  };

function placeships (ships){
    for (let ship in ships) {
        let icon = "⛴";
        let output = ships[ship].name + ": ";
        for (let i = 0; i < ships[ship].size; i++) {
        output += icon;
        }
        console.log(output);
    }
}

function printBoard(board, ships)  {
  for (let i = 0; i < ROWS; i++) {
      let row = []
      for (let j = 0; j < COLS; j++) {
          row[j] = '[  ] '
      } console.log(row.join(''))
      board [i] = row
    }
  for (let ship in ships) {
    console.log (ships[ship].name + ':  '+
