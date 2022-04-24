class Employee
{
    static #nextId = 0;

    constructor(name, email)
    {
        this.name = name;
        this.id = this.#createId();
        this.email = email;
    }

    #createId()
    {
        let id = Employee.#nextId;
        Employee.#nextId++;
        return id;
    }

    getName()
    {
        return this.name;
    }

    getId()
    {
        return this.id;
    }

    getEmail()
    {
        return this.email;
    }

    getRole()
    {
        return "Employee";
    }
}

module.exports = Employee;