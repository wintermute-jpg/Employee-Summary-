//const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const rosterInfo = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//create manager function 
function createManager() {
    console.log("Creating new Emplolyee Roster");
    inquirer.prompt([
        {
            type: "input",
            message: "Managers name?",
            name: 'name',
        },
        {
            type: "input",
            message: "Manager ID?",
            name: "id",
        },
        {
            type: "input",
            message: "Manager email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeID",
        }
    ]).then((response) => {
        const newManager = [response.name, response.id, response.email, response.officeID];

    })
};

function createEngineer() {
    console.log("C")
}
//inquirer.prompt([
  //  {
    //    type:"confirm",
      //  message: "Begin Employee Creation?",
        //name: "check",
    //}
//]).then((response) => {
  //  if(response.check === true){
        //console.log("it worked");
    //    createEmployee();
    //} else { 
      //  console.log("Thank you, please try again later")
    //}
//});

//function createEmployee() {
  //  console.log(`New Employee:`);
    //inquirer.prompt([
      //  {
        //    type:"input",
          //  message: `Employee ID?`,
            //name: `id`,
        //},
        //{
          //  type: `input`,
            //message: `Employee Name?`,
            //name: `name`,
        //},
        //{
          //  type: "list",
            //message: "Employee Role?",
            //name: `role`,
            //choices: ["Manager", "Engineer", "Intern"],
        //}, 
    //]).then((response) =>{
      //  employeeSpecs(response);
        
    //});


    //function employeeSpecs(response) {
      //  if(response.role === "Manager"){
        //    inquirer.prompt([
          //      {
            //        type: "input",
              ///      message: "What is your office number, oh Great One?",
                 //   name: "office"
                //}
            //])
        //} else if(response.role === "Engineer"){
          //  inquirer.prompt([
           //     {
             //       type: "input",
              //      message: "Report your github profile, Engineer!",
               //     name: "github",
                //}
            //])
        //} else if(response.role === "Intern"){
          //  inquirer.prompt([
            //    {
              //      type:"input",
                //    message:"What school did you attend, intern?",
                  //  name: "school",
                //}
            //])
        //}
    //}




       // {
         //   type: "confirm",
           // message: `Finalize Employee?`,
            //name: `finalize`
            //},
    //]).then((response) => {
      //  if(response.finalize === true){
        //    inquirer.prompt([
          //      {
            //    type: "list",
               // message: `Would you like to create additional employees or render your current list?`,
              //  name: `renderChoice`,
                //choices: ["Create New Employee", "Render Current List"],
              //  }
            //]).then((response) => {
               // if(response.renderChoice === "Create New Employee"){
                 //  createEmployee();
                //} else if(response.choices === "Render Current List"){
                  // console.log(`Rendering current list`);
                //}
           // })
        //}
       
    //}).then((response) => {
        //if(response.finalize);
    //}
//}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
