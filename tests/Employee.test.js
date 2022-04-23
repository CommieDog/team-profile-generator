const Employee = require("../lib/employee")

describe("Testing Employee class", () =>
{
    describe("Properties", () =>
    {
        it("Name should be set by constructor", () =>
        {
            const employeeName = "John"

            const employee = new Employee(employeeName, 0, "me@me.com");

            expect(employee.name).toEqual(employeeName);
        })
    })
});
