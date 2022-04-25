const fs = require("fs");

const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");

function writeHtmlContent(team)
{
    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    </head>
    <body>
        <header class="p-5 bg-primary bg-opacity-25">
            <h1 class="text-center">Team Profile</h1>
        </header>
        <main class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 m-5">
${writeHtmlTeam(team)}        </main>
        <footer class="container mx-5">
            <p>Made using Team Profile Generator</p>
            <p>Team Profile Generator Copyright 2022 John Netzel. All Rights Reserved. Licensed under the MIT License.</p>
        </footer>
    </body>
</html>`
}

function writeHtmlTeam(team)
{
    let teamMembersHtmlString = "";

    for(const teamMember of team)
    {
        teamMembersHtmlString += writeHtmlTeamMember(teamMember) + "\n";
    }

    return teamMembersHtmlString;
}

function writeHtmlTeamMember(teamMember)
{
    if(teamMember instanceof Manager)
    {
        return `            <div class="col">
                <section class="card">
                    <div class="card-header bg-success bg-opacity-25">
                        <h2>${teamMember.getName()}</h2>
                        <h3><i class="bi bi-eyeglasses"></i> ${teamMember.getRole()}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${teamMember.getOfficeNumber()}</li>
                    </ul>
                </section>
            </div>`;
    }
    else if(teamMember instanceof Engineer)
    {
        return `            <div class="col">
                <section class="card">
                    <div class="card-header bg-success bg-opacity-25">
                        <h2>${teamMember.getName()}</h2>
                        <h3><i class="bi bi-gear-fill"></i> ${teamMember.getRole()}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></li>
                    </ul>
                </section>
            </div>`;
    }
    else if(teamMember instanceof Intern)
    {
        return `            <div class="col">
                <section class="card">
                    <div class="card-header bg-success bg-opacity-25">
                        <h2>${teamMember.getName()}</h2>
                        <h3><i class="bi bi-cup-fill"></i> ${teamMember.getRole()}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
                        <li class="list-group-item">School: ${teamMember.getSchool()}</li>
                    </ul>
                </section>
            </div>`;
    }
}

function writeHtmlFile(team)
{
    console.log("Generating file for team...");
    fs.writeFile("./dist/team.html", writeHtmlContent(team), (err) => 
    {
        err ? console.error(err) : console.log("File successfully written to './dist/team.html'!");
    });
}

module.exports = writeHtmlFile;