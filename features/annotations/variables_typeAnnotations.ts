// Variable declaration
// const/let variable: type = value;
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

// values whose name matches that of their type
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now: Date = new Date();
let colors: string[] = ["red", "green", "blue"];
const person: Object = {
  name: "John",
  lastname: "Wick",
};
const months: Array<string> = ["January", "May", "August", "December"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
//let point: { x: number, y: number } = {
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use type annotations
// 1) Function that returns the "any" type
const jsonToParse = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(jsonToParse);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// Any vs Unknown
let anyVar: any = 20;
anyVar = "Now I hold a string";
anyVar = true;
anyVar = ["now a mixed-type array", 123];
anyVar.forEach((item) => console.log(item));
// The following throws no errors:
// anyVar.asdsfsdf();

let unknownVar: unknown;
unknownVar = true;
unknownVar = ["now a mixed-type array", 123];
// The following throws an error:
// unknownVar.forEach(item => console.log(item));
