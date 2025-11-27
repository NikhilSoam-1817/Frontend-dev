function Person(name) {
    this.name = name;
}
Person.prototype.showName = function() {
    console.log("Name:", this.name);
};
function Faculty(name, dept) {
    Person.call(this, name);
    this.department = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function() {
    console.log("Department:", this.department);
};
function Professor(name, dept, subject) {
    Faculty.call(this, name, dept);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function() {
    console.log("Subject:", this.subject);
};
const p = new Professor("Kishan", "Engineering", "JavaScript");
p.showName();
p.showDepartment();
p.showSubject();