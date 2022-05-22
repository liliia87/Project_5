import Person from './../src/galactic_age.js';

describe('Persone', () => {

  test('should correctly create a person object', () => {
    const person = new Person("Keren",24,75);
    expect(person.name).toEqual("Keren");
    expect(person.age).toEqual(24);
    expect(person.averageLofeEx).toEqual(75);
  });

  test('should correctly calculate year on Mercury', () => {
    const person = new Person("Keren",24,75);
    expect(person.calculateMercury()).toEqual(100);
    
  });

  test('should correctly calculate year on Venus', () => {
    const person = new Person("Keren",24,75);
    expect(person.calculateVenus()).toBeCloseTo(38.709);
  });

  test('should correctly calculate year on Mars', () => {
    const person = new Person("Keren",24,75);
    expect(person.calculateMars()).toBe(13);
  });

  test('should correctly calculate year on Mars', () => {
    const person = new Person("Keren",24,75);
    expect(person.calculateJupiter()).toBe(2);
  });

  test('the shopping list has sport on it', () => {
    let lifestyleList = new Set([
      "professional sport",
      "sport",
      "no sport",
    ]);
    expect(lifestyleList).toContain('sport');
    expect(lifestyleList).toContain('professional sport');
    expect(lifestyleList).toContain('no sport');
  });
});