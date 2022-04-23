class Employee
{
    static #nextId = 0;

    constructor(name, id, email)
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
}

module.exports = Employee;