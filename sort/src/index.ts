class Sorter {
  //   collection: number[];
  //   constructor(collection: number[]) {
  //     this.collection = collection;
  //   }

  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //If collection is an array of number
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        //If collection is a string, do this logic instead
        if (typeof this.collection === "string") {
        }
      }
    }
  }
}

const sorter = new Sorter([-2, 3, 6, -4, 10]);
sorter.sort();
console.log(sorter.collection);
