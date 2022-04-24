const inquirer = require("inquirer");
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

function promptForManager()
{
    return new Promise((resolve, reject) =>
    {
        inquirer.prompt(managerQuestions).then((answers) =>
        {
            team.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
            resolve();
        })
    });
}

console.log("Welcome to the team profile generator!");
promptForManager().then(() =>
{
    //let managerAnswers = answers;
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
                break;
            case "Add an intern":
                console.log("Add an intern");
                break;
        }
    console.log("Done!");
    console.log(team);
    })
});