function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.getDetails = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("BMW", "X5");
car1.getDetails();
car2.getDetails();