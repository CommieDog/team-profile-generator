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
    console.log(answers);
})