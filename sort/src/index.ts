import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("uOiEa");

numbersCollection.sort();
charactersCollection.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
