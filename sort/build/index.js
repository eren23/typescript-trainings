"use strict";
var Sorter = /** @class */ (function () {
    //   collection: number[];
    //   constructor(collection: number[]) {
    //     this.collection = collection;
    //   }
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                //If collection is an array of number
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                //If collection is a string, do this logic instead
                if (typeof this.collection === "string") {
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([-2, 3, 6, -4, 10]);
sorter.sort();
console.log(sorter.collection);
