/* Function expressions */
const add = (a: number, b: number): number => {
  return a + b;
};

// Specifying the type for the return value isn't mandatory
const subtract = (a: number, b: number) => {
  return a - b;
};

// But it helps prevent errors:
const multiply = (a: number, b: number) => {
  a * b;
};

/* Function declarations */
function divide(a: number, b: number): number {
  return a / b;
}

/* Anonymous functions */
const exponentiate = function (a: number, b: number): number {
  return Math.pow(a, b);
};

// Special return values
// Void
const logger = (message: string): void => {
  console.log(message);
};

// Never (completes function execution)
const throwError = (message: string): never => {
  throw new Error(message);
};

// Don't use the never type, if there's a chance the execution completes
const maybeThrowError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// Receiving objects as arguments
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeatherDestructured = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
