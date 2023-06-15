// Object that's abstracted into a tuple;
const drinkObj = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

//const pepsi: [string, boolean, number] = ["brown", true, 40];
const pepsi: Drink = ["brown", true, 40];
