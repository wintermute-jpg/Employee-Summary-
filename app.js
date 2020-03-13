const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const rosterInfo = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
createManager();

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
        const newManager = new Manager (response.name, response.id, response.email, response.officeID);
        console.log(newManager);
        rosterInfo.push(newManager);
        addEmployee(); 
    })
};

//Functions:
//Create Employee
function addEmployee(){
  inquirer.prompt([
    {
      type: "list",
      message: "Create new employee?",
      name: "addEmployee",
      choices: ["Engineer", "Intern", "Create Roster"]
    }
  ]).then((response) => {
    switch(response.addEmployee){
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      case "Create Roster":
        buildRoster();
      default:
        buildRoster();
    } 
  });
};
//Create Engineer
function createEngineer() {
  console.log("Creating new Engineer");
  inquirer.prompt([
      {
          type: "input",
          message: "Engineers name?",
          name: 'name',
      },
      {
          type: "input",
          message: "Engineer ID?",
          name: "id",
      },
      {
          type: "input",
          message: "Engineer email?",
          name: "email",
      },
      {
          type: "input",
          message: "Link your github account:",
          name: "github",
      }
  ]).then((response) => {
      const newEngineer = new Engineer (response.name, response.id, response.email, response.github);
      console.log(newEngineer);
      rosterInfo.push(newEngineer);
      addEmployee();
  })
};
//create Intern
function createIntern() {
  console.log("Creating new Intern");
  inquirer.prompt([
      {
          type: "input",
          message: "Interns name?",
          name: 'name',
      },
      {
          type: "input",
          message: "Intern ID?",
          name: "id",
      },
      {
          type: "input",
          message: "Intern email?",
          name: "email",
      },
      {
          type: "input",
          message: "What school do/did you attend?",
          name: "school",
      }
  ]).then((response) => {
      const newIntern = new Intern (response.name, response.id, response.email, response.school);
      console.log(newIntern);
      rosterInfo.push(newIntern);
      addEmployee();
  })
};
//Build Roster Function
function buildRoster(){
  //console.log(rosterInfo);
   var rendered = render(rosterInfo);
   console.log(rendered);
    outputPath.push(rendered);
  //function to create ending file
  //need to create an if statement to handle if a file exists or not
   //reference line 8-10 in build roster function
  //finish render roster.

    //fs.writeFileSync();
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

