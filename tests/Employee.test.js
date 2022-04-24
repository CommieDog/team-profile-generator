const Employee = require("../lib/employee")

describe("Testing Employee class", () =>
{
    describe("Properties", () =>
    {
        it("Name should be set by constructor", () =>
        {
            const employeeName = "John"

            const employee = new Employee(employeeName, 1, "me@me.com");

            expect(employee.name).toEqual(employeeName);
        }),
        
        it("Id should be set by constructor", () =>
        {
            const employeeId = 1;

            const employee1 = new Employee("John", employeeId, "me@me.com");

            expect(employee1.id).toEqual(employeeId);
        }),
        
        it("Email should be set by constructor", () =>
        {
            const employeeEmail = "john@email.com"

            const employee = new Employee("John", 1, employeeEmail);

            expect(employee.email).toEqual(employeeEmail);
        })
    }),

    describe("Getters", () => 
    {
        it("getName() should return the employee's name", () =>
        {
            const employeeName = "John"

            const employee = new Employee(employeeName, 1, "me@me.com");

            expect(employee.getName()).toEqual(employeeName);
        }),
        
        it("getId() should return the employee's ID", () =>
        {
            const employeeId = 1;

            const employee = new Employee("John", employeeId, "me@me.com");

            expect(employee.getId()).toEqual(employeeId);
        }),
        
        it("getEmail() should return the employee's email", () =>
        {
            const employeeEmail = "john@email.com"

            const employee = new Employee("John", 1, employeeEmail);

            expect(employee.getEmail()).toEqual(employeeEmail);
        }),
        
        it("getRole() should return the generic 'Employee' role", () =>
        {
            const employeeRole = "Employee"

            const employee = new Employee("John", 1, "me@me.com");

            expect(employee.getRole()).toEqual(employeeRole);
        })
    })
});
