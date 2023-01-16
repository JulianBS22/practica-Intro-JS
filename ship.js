class Ship {
    constructor(name,length,placing,hits,sunk){
      this.name = name;
      this.length = length;
      this.placing = placing;
      this.hits = 0;
      this.sunk = false;
  
    this.hit = function(){
      this.hits++;
      this.isSunk();
      return this.hits;
    }
    this.isSunk = function(){
      if (this.length === this.hits){
        return this.sunk = true;
        }
      }
    }
  }
  
  module.exports = Ship;