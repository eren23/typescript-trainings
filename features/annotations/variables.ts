let apples: number = 5;
let speed: string = "";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumber: number[] = [1, 2, 3, 4];
let truhts: boolean[] = [true, true, false];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations

//1) Functions that retuns "any" type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

//2) When we declare in line and then initialize in other line
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//3)when we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
