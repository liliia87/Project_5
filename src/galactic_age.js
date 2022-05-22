// export default function Triangle(side1, side2, side3) {
//  ...
//}

export default class Person {
  constructor(name, age, averageLofeEx, ){
    this.name = name;
    this.age = age;
    this.averageLofeEx = averageLofeEx;
  }
  
  calculateMercury(){
    return this.age/0.24;
  }

  calculateVenus(){
    return this.age/0.62;
  }

  calculateMars(){
    return Math.round(this.age/1.88);
  }

  calculateJupiter(){
    return Math.round(this.age/11.86);
  }
}

let lifestyleList = [
  "professional sport",
  "sport",
  "no sport",
];