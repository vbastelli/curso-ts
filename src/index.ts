let age: number = 5;
const firstName: string = "Felipe";
const isValid: boolean = true;
const idk: any = 5;

const ids: number[] = [1, 2, 3, 4, 5];
const abc: string[] = ["a", "b", "c"];

// Tupla
const person: [number, string] = [1, "A"];

// Lista de tuplas
const people: [number, string][] = [
  [1, "A"],
  [2, "B"],
];

//Intersections
const productId: string | number = "1"; // ou 1

//Enum
enum Direction {
  Up = 1,
  Down = 2,
}

const direction = Direction.Up;

// Type Assertions
const productName: any = "Boné";

// let itemId = productName as string;
let itemId = <string>productName;

console.log(direction);
