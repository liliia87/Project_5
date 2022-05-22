import Person from './../src/galactic_age.js';

describe('Persone', () => {

  test('should correctly create a person object', () => {
    const person = new Person("Keren");
    expect(person.name).toEqual("Keren");
    // expect(person.age).toEqual(24);
    // expect(person.averageLofeEx).toEqual(75);
  });

  test('should correctly calculate year on Mercury', () => {
    const person = new Person("Keren");
    expect(person.calculateMercury(24)).toEqual(100);
    
  });

  test('should correctly calculate year on Venus', () => {
    const person = new Person("Keren");
    expect(person.calculateVenus(24)).toBeCloseTo(38.709);
  });

  test('should correctly calculate year on Mars', () => {
    const person = new Person("Keren");
    expect(person.calculateMars(24)).toBe(13);
  });

  test('should correctly calculate year on Jupiter', () => {
    const person = new Person("Keren");
    expect(person.calculateJupiter(24)).toBe(2);
  });

  test('should correctly return points for professional sport', () => {
    const person = new Person("Keren");
    expect(person.lifestyleList("professional sport")).toBe(5);
  });

  test('should correctly return points for sport', () => {
    const person = new Person("Keren");
    expect(person.lifestyleList("sport")).toBe(10);
  });

  test('should correctly return points for no sport', () => {
    const person = new Person("Keren");
    expect(person.lifestyleList("no sport")).toBe(15);
  });

  test('should correctly return points for not correct value', () => {
    const person = new Person("Keren");
    expect(person.lifestyleList(" ")).toEqual(0);
  });
//---------------------------------------------------------------------------------------//
  test('should correctly return points for every day', () => {
    const person = new Person("Keren");
    expect(person.activityLevel("every day")).toBe(5);
  });

  test('should correctly return points for one per week', () => {
    const person = new Person("Keren");
    expect(person.activityLevel("one per week")).toBe(10);
  });

  test('should correctly return points for not often', () => {
    const person = new Person("Keren");
    expect(person.activityLevel("not often")).toBe(15);
  });

  test('should correctly return points for not correct value', () => {
    const person = new Person("Keren");
    expect(person.activityLevel(" ")).toBe(0);
  });

  test('should correctly return points for calculating average life sport ~ not often', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("sport","not often")).toBe(75);
  });

  test('should correctly return points for calculating average life professional sport ~ not often', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("professional sport","not often")).toBe(50);
  });

  test('should correctly return points for calculating average life no sport ~ every day', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("no sport","every day")).toBe(50);
  });

  test('should correctly return points for calculating average life no sport ~ not often', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("no sport","not often")).toBe(60);
  });

  test('should correctly return points for calculating average life sport ~ every day', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("sport","every day")).toBe(80);
  });

  test('return the number of years they have lived past the life expectancy', () => {
    const person = new Person("Keren");
    expect(person.calculateMercuryAver(24, 80)).toBe('You will live on Mercury on ${difference} year more');
  });
});
