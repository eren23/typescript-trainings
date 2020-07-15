const carMakers: string[] = ["ford", "toyota"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"]];
//const carsByMake:string[][] = [];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100);

//Help with "map"
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push("asdasd");
importantDates.push(new Date());
