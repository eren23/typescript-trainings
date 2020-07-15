const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color is ${this.color}`;
  },
};

interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  //   console.log(
  //     `Name:${vehicle.name}, Year: ${vehicle.year}, Broken? ${vehicle.broken}`
  //   );
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
