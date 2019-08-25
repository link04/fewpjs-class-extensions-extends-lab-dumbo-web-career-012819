class Polygon {

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
