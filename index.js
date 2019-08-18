class Polygon {

  constructor(integers){
    this.integers = integers;
  }

  get countSides(){
    return this.integers.length;
  }

  get perimeter(){
    return this.integers.reduce((total, integer) => total + integer);
  }

}
