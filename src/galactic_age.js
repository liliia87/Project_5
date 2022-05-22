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

Person.prototype.lifestyleList = function(life_S){
  let lifestyleList = [
    "professional sport",
    "sport",
    "no sport",
  ];
  let lifeS;
  switch (life_S){
    case "professional sport": 
      lifeS = 5;
      console.log("You choose - professional sport");
      break;
    case "sport":
      lifeS = 10;
      console.log("You choose - sport");
      break;
    case "no sport":
      lifeS = 15;
      console.log("You choose - no sport");
      break;
    default:
      console.log(`Sorry, we are out of ${lifeS}`);
  }
  return lifeS;
}

Person.prototype.activityLevel = function(activity_L){
  let activityLevel = [
    "every day",
    "one per week",
    "not often"
  ]

  let lifeSactivityL;
  switch (lifeSactivity_L){
    case "every day": 
      lifeS = 5;
      console.log("You choose - professional sport");
      break;
    case "one per week":
      lifeS = 10;
      console.log("You choose - sport");
      break;
    case "not often":
      lifeS = 15;
      console.log("You choose - no sport");
      break;
    default:
      console.log(`Sorry, we are out of ${lifeS}`);
  }
  return lifeSactivityL;
}