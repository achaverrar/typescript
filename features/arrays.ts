const carMakers = ["Ford", "Toyota", "Chevy"];
const dates: Date[] = [];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Benefits of typed arrays
// Help with inference when extracting array items
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with the array method
carMakers.map((maker: string): string => {
  return maker.toUpperCase();
});

// Flexible types
const flexibleArray1 = [new Date(), "2023-06-15"];
const flexibleArray2: (Date | string)[] = [new Date(), "2023-06-15"];
