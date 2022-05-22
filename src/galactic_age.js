// export default function Triangle(side1, side2, side3) {
//  ...
//}

export default class Person {
  constructor(name){
    this.name = name;
    this.age;
    this.averageLifeExpectation;
  }
  
  calculateMercury(age){
    this.age = age;
    return this.age/0.24;
  }

  calculateVenus(age){
    this.age = age;
    return this.age/0.62;
  }

  calculateMars(age){
    this.age = age;
    return Math.round(this.age/1.88);
  }

  calculateJupiter(age){
    this.age = age;
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
      lifeS = 0;
      break;
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
  switch (activity_L){
    case "every day": 
    lifeSactivityL = 5;
      console.log("You choose - professional sport");
      break;
    case "one per week":
      lifeSactivityL = 10;
      console.log("You choose - sport");
      break;
    case "not often":
      lifeSactivityL = 15;
      console.log("You choose - no sport");
      break;
    default:
      console.log(`Sorry, we are out of ${lifeSactivityL}`);
      lifeSactivityL = 0;
      break;
  }
  return lifeSactivityL;
}

Person.prototype.calculateAverage = function (life_S, activity_L){
  let lifeStyle = this.lifestyleList(life_S);
  let activityL = this.activityLevel(activity_L);
  let result = lifeStyle + activityL;
  let aver;
  if (result == 10 || result == 20){
   aver = 50;
  }
  else if (result == 15){
   aver = 80;
  }
  else if (result == 25){
    aver = 75;
  }
  else if (result == 30){
    aver = 60;
  }
  return aver;
}

Person.prototype.calculateMercuryAver = function(age){
  let Mercury_age = this.calculateMercury(age);
  let life_S = "professional sport";
  let activity_L = "one per week";
  let aver_Age = this.calculateAverage(life_S, activity_L);
  let difference;
  if (Mercury_age > aver_Age){
    difference = Mercury_age - aver_Age;
    return `You will live on Mercury on ${Math.round(difference)} year more`;
  }
  else  if (aver_Age > Mercury_age){
    difference = aver_Age - Mercury_age;
    return `You will live on Mercury on ${Math.round(difference)} year less`;
  }
  
}

Person.prototype.calculateVenusAver = function(age){
  let Mercury_age = this.calculateVenus(age);
  let life_S = "professional sport";
  let activity_L = "one per week";
  let aver_Age = this.calculateAverage(life_S, activity_L);
  let difference;
  if (Mercury_age > aver_Age){
    difference = Mercury_age - aver_Age;
    return `You will live on Mercury on ${Math.round(difference)} year more`;
  }
  else  if (aver_Age > Mercury_age){
    difference = aver_Age - Mercury_age;
    return `You will live on Mercury on ${Math.round(difference)} year less`;
  }
  
}