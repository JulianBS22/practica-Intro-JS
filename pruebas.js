/*const ships = {
    ship1: {
      name: 'Imperial Destroyer',
      size = [] 
        for (let i = 0; i < size; i++) {
            console.log(🛸)
        }
      
      
    }
}
*/
// crear objeto nave con propiedades:nombre y tamaño
//nombre es array de nombres clasicos y cuyo valor esta asociado a un tamaño

ship= {'Imperial Destroyer':5, 
        'Dreadnaught-Class heavy Cruiser':4, 
        'Millennium Falcon':3,
        'X-Wing':2,
        'Pod':1
    }

    for (const shipName in ship) {
        const size = ship[shipName];
        for (let i = 0; i < size; i++) {
          console.log('🛸');
        }
      }