const Engineer = require("../lib/engineer")

describe("Testing Engineer class", () =>
{
    describe("Properties", () =>
    {        
        it("Github should be set by constructor", () =>
        {
            const engineerGithub = "Engiemann"

            const engineer = new Engineer("John", 0, "john@email.com", engineerGithub);

            expect(engineer.github).toEqual(engineerGithub);
        })
    }),

    describe("Getters", () => 
    {
        it("getGithub() should return the engineer's github name", () =>
        {
            const engineerGithub = "Engiemann"

            const engineer = new Engineer("John", 0, "john@email.com", engineerGithub);

            expect(engineer.getGithub()).toEqual(engineerGithub);
        }),
        
        it("getRole() should return the 'Engineer' role", () =>
        {
            const engineerRole = "Engineer"

            const engineer = new Engineer("John", 0, "john@email.com", "Engiemann");

            expect(engineer.getRole()).toEqual(engineerRole);
        })
    })
});
