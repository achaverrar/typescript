"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            const ref = this.collection[i];
            for (let j = 0; j < length - 1 - i; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHandCopy = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHandCopy;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter);
