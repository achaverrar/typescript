class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicleInstance = new Vehicle("orange");
console.log(vehicleInstance.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carInstance = new Car(4, "red");
carInstance.drive();
carInstance.startDrivingProcess();
