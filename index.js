class Polygon {
<<<<<<< HEAD

  constructor(integers) {
    this.integers = integers;
  }

  get countSides() {
    return this.integers.length;
  }

  get perimeter() {
    return this.integers.reduce((total, integer) => total + integer);
  }

}
<<<<<<< HEAD

class Triangle extends Polygon {

  get isValid() {
    for(let i = 0; i < this.integers.length; i++){
      if(this.perimeter - this.integers[i] > this.integers[i] === false) {
          return false;
        }
      }
      return true;
    }
  }

  class Square extends Polygon {

    get isValid() {
      return this.perimeter % this.countSides === 0 ? true : false;
    }

    get area() {
      return this.integers[0] * this.integers[0];
    }
  }
=======
=======
 
  constructor(integers){
    this.integers = integers;
  }
  
  get countSides(){
    this.integers.length;
  }
  
}
>>>>>>> 75943ab93ef385554d09fac5eca599830cdea181
>>>>>>> 75dbbf36febf77e2063b03e99a1d81a915525e40
