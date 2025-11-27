class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getAnnualSalary() { return this.salary * 12; }
    applyBonus(percent) { this.salary += this.salary * percent / 100; }
}
const employees = [
    new Employee(1, "Alice", "HR", 5000),
    new Employee(2, "Bob", "IT", 7000),
    new Employee(3, "Charlie", "Finance", 6000),
    new Employee(4, "David", "Marketing", 5500),
    new Employee(5, "Eve", "Sales", 6500)
];
employees.forEach(emp => console.log(`${emp.name}: Annual Salary = $${emp.getAnnualSalary()}`));
const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout:", totalPayout);