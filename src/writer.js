const fs = require("fs");

function writeHtmlFile(team)
{
    console.log("Generating file for team...");
    console.log(team);
    fs.writeFile("./dist/team.html", "This is a test file!", (err, msg) => 
    {
        err ? console.error(err) : console.log("File successfully written to './dist/team.html'!");
    });
}

module.exports = writeHtmlFile;