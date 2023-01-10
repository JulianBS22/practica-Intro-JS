//crea los 4 tableros
const ROWS = 10
const COLS = 10
let board = []
/*const ships = {
    ship1: {
      name: 'Imperial Destroyer',
      size: '🛸', '🛸' , '🛸' , '🛸' , '🛸'
    },
    ship2: {
      name: 'Dreadnaught-Class Heavy Cruiser',
      size: '4'
    },
    ship3: {
      name: 'Millennium Falcon',
      size: '3'
    },
    ship4: {
        name: 'X-wing',
        size: '2'
    },
    ship5: {
        name:'Pod',
        size: '1'
    }
  };
*/
for (let i = 0; i < ROWS; i++) {
    let row = []
    for (let j = 0; j < COLS; j++) {
        row[j] = '| |'
            console.log(j,i)
    }
    board [i] = row
}
for (let i = 0; i < ROWS; i++) {
    console.log (board[i])
}
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