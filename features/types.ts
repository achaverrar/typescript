const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {}

const red = new Color();

// Union types
type UnionType = string | undefined;
let response: UnionType;
response?.toUpperCase();
