const inquirer = require("inquirer");
const writeHtmlFile = require("./src/writer") 

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const team = [];

const managerQuestions = [
    {
        name: "managerName",
        message: "What is the team manager's name?"
    },
    {
        name: "managerId",
        message: "What is the team manager's employee ID?"
    },
    {
        name: "managerEmail",
        message: "What is the team manager's email address?"
    },
    {
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?"
    }
];
const engineerQuestions = [
    {
        name: "engineerName",
        message: "What is this engineer's name?"
    },
    {
        name: "engineerId",
        message: "What is this engineer's employee ID?"
    },
    {
        name: "engineerEmail",
        message: "What is this engineer's email address?"
    },
    {
        name: "engineerGithub",
        message: "What is this engineer's Github profile?"
    }
];
const internQuestions = [
    {
        name: "internName",
        message: "What is this intern's name?"
    },
    {
        name: "internId",
        message: "What is this intern's employee ID?"
    },
    {
        name: "internEmail",
        message: "What is this intern's email address?"
    },
    {
        name: "internSchool",
        message: "What is this intern's school?"
    }
];

/**
 * Prompts the user to input info on the team's manager
 * @returns a Promise object that is resolved once all the subsequent team data is entered
 */
function promptForManager()
{
    return new Promise((resolve, reject) =>
    {
        inquirer.prompt(managerQuestions).then((answers) =>
        {
            team.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
            promptForNextEmployee().then()
            {
                resolve();
            };
            //resolve();
        })
    });
}

/**
 * Prompts the user to input info on an engineer for the team
 * @returns a Promise object that is resolved once all the subsequent team data is entered
 */
function promptForEngineer()
{
    return new Promise((resolve, reject) =>
    {
        inquirer.prompt(engineerQuestions).then((answers) =>
        {
            team.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub));
            promptForNextEmployee().then()
            {
                resolve();
            };
        })
    });
}

/**
 * Prompts the user to input info on an intern for the team
 * @returns a Promise object that is resolved once all the subsequent team data is entered
 */
function promptForIntern()
{
    return new Promise((resolve, reject) =>
    {
        inquirer.prompt(internQuestions).then((answers) =>
        {
            team.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool));
            promptForNextEmployee().then()
            {
                resolve();
            };
        })
    });
}

/**
 * Prompts the user whether to input the data for another employee or not
 * @returns a Promise object that is resolved once all the team data is entered
 */
function promptForNextEmployee()
{
    return new Promise((resolve, reject) =>
    {
        inquirer.prompt(
            [
                {
                    type: "list",
                    name: "nextAction",
                    message: "What you you like to do next?",
                    choices: ["Add an engineer", "Add an intern", "Finish and generate profile"]
                }
            ]
        ).then((answers) => 
        {
            switch(answers.nextAction)
            {
                case "Add an engineer":
                    return promptForEngineer();
                case "Add an intern":
                    return promptForIntern();
                default:
                    writeHtmlFile(team);
                    resolve(); // Resolution of all promises occurs here
            }
        })
    })
}

console.log("Welcome to the team profile generator!");
promptForManager();
