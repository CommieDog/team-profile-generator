const Manager = require("../lib/manager")

describe("Testing Manager class", () =>
{
    describe("Properties", () =>
    {        
        it("Office number should be set by constructor", () =>
        {
            const managerOfficeNumber = 201

            const manager = new Manager("John", 0, "john@email.com", managerOfficeNumber);

            expect(manager.officeNumber).toEqual(managerOfficeNumber);
        })
    }),

    describe("Getters", () => 
    {
        it("getOfficeNumber() should return the manager's office number", () =>
        {
            const managerOfficeNumber = 201

            const manager = new Manager("John", 0, "john@email.com", managerOfficeNumber);

            expect(manager.getOfficeNumber()).toEqual(managerOfficeNumber);
        }),
        
        it("getRole() should return the 'Manager' role", () =>
        {
            const managerRole = "Manager"

            const manager = new Manager("John", 0, "john@email.com", 201);

            expect(manager.getRole()).toEqual(managerRole);
        })
    })
});
