const Intern = require("../lib/intern")

describe("Testing Intern class", () =>
{
    describe("Properties", () =>
    {        
        it("School should be set by constructor", () =>
        {
            const internSchool = "Party Hard U";

            const intern = new Intern("John", 1, "john@email.com", internSchool);

            expect(intern.school).toEqual(internSchool);
        })
    }),

    describe("Getters", () => 
    {
        it("getSchool() should return the intern's school", () =>
        {
            const internSchool = "Party Hard U";

            const intern = new Intern("John", 1, "john@email.com", internSchool);

            expect(intern.getSchool()).toEqual(internSchool);
        }),
        
        it("getRole() should return the 'Intern' role", () =>
        {
            const internRole = "Intern";

            const intern = new Intern("John", 1, "john@email.com", "Party Hard U");

            expect(intern.getRole()).toEqual(internRole);
        })
    })
});
