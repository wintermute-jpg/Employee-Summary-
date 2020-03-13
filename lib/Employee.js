// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//function getRole
getRole(){
    return "Employee";
}
//function getID
getId(){
    return this.id;
}
//function getEmail
getEmail(){
    return this.email;
}
//function getName
getName(){
    return this.name
}
}

module.exports = Employee;