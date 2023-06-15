// Variable declaration
// const/let variable: type = value;
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

// values whose name matches that of their type
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now = new Date();
let colors = ["red", "green", "blue"];
let myNumbers = [1, 2, 3];
let truths = [true, true, false];

// Classes
class Car {}
let car = new Car();

// Object literal
//let point = {
let point = {
  x: 10,
  y: 20,
};

// Functions
const logNumber = (i: number) => {
  console.log(i);
};
