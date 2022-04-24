const inquirer = require("inquirer")

console.log("Welcome to the team profile generator!");
inquirer.prompt(
    [
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
    ]
).then((answers) =>
{
    let managerAnswers = answers;
    inquirer.prompt(
        [
            {
                type: "list",
                name: "nextAction",
                message: "What you you like to do next?",
                choices: ["Add an engineer", "Add an intern", "finish and generate profile"]
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
    console.log(managerAnswers);
    })
})