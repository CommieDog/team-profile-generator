const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
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
            resolve();
        })
    });
}

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
                    console.log("Add an engineer");
                    return promptForEngineer();
                case "Add an intern":
                    console.log("Add an intern");
                    resolve();
                    break;
                default:
                    console.log("Done!");
                    console.log(team);
                    resolve();
            }
        })
    })
}

console.log("Welcome to the team profile generator!");
promptForManager().then(() =>
{
    //let managerAnswers = answers;
    /*inquirer.prompt(
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
                promptForEngineer();
                break;
            case "Add an intern":
                console.log("Add an intern");
                break;
        }
    })*/
    //console.log("Done!");
    //console.log(team);
});