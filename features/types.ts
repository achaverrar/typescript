const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {}

const red = new Color();

// Custom Types
type Gender = "feminine" | "masculine" | "nonbinary" | "nonspecified";

type Person = {
  name: string;
  age: number;
  gender: Gender;
  nationality: string;
};

type Student = {
  school: string;
};

const robert: Person = {
  name: "Robert",
  age: 15,
  gender: "masculine",
  nationality: "Canadian",
};

// Intersection types
type HighschoolStudent = Person & Student;

const candance: HighschoolStudent = {
  name: "Candance",
  age: 13,
  gender: "feminine",
  nationality: "American",
  school: "St. Patrick High School",
};

// Union types
type UnionType = string | undefined;
let response: UnionType;
response?.toUpperCase();

// Type Assertion
let message: any = "";
const uppercasedMessage = (message as string).toUpperCase();
const canvas = <HTMLCanvasElement>document.getElementById("canvas");

// Custom Types vs Interfaces
// Interfaces can extend from types and other interfaces
// Custom types can NOT extend from other types nor interfaces
interface Child extends Person {
  mother: string;
}

const amelie: Child = {
  mother: "Chloé",
  name: "Amélie",
  age: 23,
  gender: "feminine",
  nationality: "French",
};

// Other possible operations
// Type = Type | Interface
// Type = Type & Interface
