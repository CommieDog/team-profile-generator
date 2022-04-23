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
        }),
        
        it("Id should be set automatically to unique number on construction", () =>
        {
            const employee1 = new Employee("John", 0, "me@me.com");
            const employee2 = new Employee("Paul", 0, "notme@me.com");

            expect(employee1.id).not.toEqual(employee2.id);
        }),
        
        it("Email should be set by constructor", () =>
        {
            const employeeEmail = "john@email.com"

            const employee = new Employee("John", 0, employeeEmail);

            expect(employee.email).toEqual(employeeEmail);
        })
    }),

    describe("Getters", () => 
    {
        it("getName() should return the employee's name", () =>
        {
            const employeeName = "John"

            const employee = new Employee(employeeName, 0, "me@me.com");

            expect(employee.getName()).toEqual(employeeName);
        }),
        
        it("getId() should return the employee's name", () =>
        {
            const employee = new Employee("John", 0, "me@me.com");

            expect(employee.getId()).toEqual(employee.id);
        }),
        
        it("getEmail() should return the employee's name", () =>
        {
            const employeeEmail = "john@email.com"

            const employee = new Employee("John", 0, employeeEmail);

            expect(employee.getEmail()).toEqual(employeeEmail);
        }),
        
        it("getRole() should return the generic 'Employee' role", () =>
        {
            const employeeRole = "Employee"

            const employee = new Employee("John", 0, "me@me.com");

            expect(employee.getRole()).toEqual(employeeRole);
        })
    })
});
