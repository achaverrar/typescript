const strings = ["str1", "str2"];
const numbers = [1, 2, 3, 4];

/* Classes */
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

/* Type annotation */
const arrayOfStrings = new ArrayOfAnything<string>(strings);
/* Type inference */
const arrayOfNumbers = new ArrayOfAnything(numbers);

/* Functions */
function printAnything<T>(collection: T[]): void {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
  }
}

/* Type annotation */
printAnything<string>(strings);
/* Type inference */
printAnything<number>(numbers);

/* Generic constraints */
class House {
  print(): void {
    console.log("I'm a house");
  }
}

class Car {
  print(): void {
    console.log("I'm a car");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(collection: T[]) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
