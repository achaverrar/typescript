interface Reportable {
  optionalField?: string;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const minimumReportable: Reportable = {
  summary(): string {
    return "This object only satisfy the minimum requirements to implement the Reportable interface";
  },
};

const fullyReportable: Reportable = {
  optionalField: "This is the optional field",
  summary(): string {
    return "This object implements every field and method in the Reportable interface";
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.optionalField?.length);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
printSummary(minimumReportable);
printSummary(fullyReportable);
