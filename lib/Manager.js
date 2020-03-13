// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//extending the employee class to accomodate the manager subclass
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
 //code for getOfficeNumber
 getOfficeNumber(){
     return this.officeNumber;
 }
 //code for getRole
 getRole(){
     return "Manager";
 }
}

module.exports = Manager