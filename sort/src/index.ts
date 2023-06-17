import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("uOiEa");

const numbersSorter = new Sorter(numbersCollection);
const charactersSorter = new Sorter(charactersCollection);

numbersSorter.sort();
charactersSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
