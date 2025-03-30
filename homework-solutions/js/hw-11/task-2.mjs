class Employee {
  // Ваш код

  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Please input valid name');
    } else if (![...value].every((char) => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
      throw new Error('Please use latin letters only');
    } else if (value.length < 2 || value.length > 50) {
      throw new Error('First name should have from 2 to 50 letters');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Please input valid last name');
    } else if (![...value].every((char) => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
      throw new Error('Please use latin letters only');
    } else if (value.length < 2 || value.length > 50) {
      throw new Error('First name should have from 2 to 50 letters');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Please input valid profession');
    } else if (value === '' || value.length === 0) {
      throw new Error('Profession cannot be empty');
    } else if (value.includes('  ')) {
      throw new Error('Only single spaces are allowed');
    } else if (value === ' ') {
      throw new Error('Profession name cannot consist of one space');
    } else if (
      ![...value].every((char) => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')
    ) {
      throw new Error('Only latin letters with single spaces are allowed');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== 'number') {
      throw new Error('Please input valid salary');
    } else if (value <= 0 || value >= 10000) {
      throw new Error('Salary range should be from 1 to 9999');
    }
    this.#salary = value;
  }
}

class Company {
  // Ваш код
  #employees;
  constructor(title, phone, address, employees) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  #getEmployeeIndex(firstName) {
    if (typeof firstName !== 'string') {
      throw new Error('Name must be a string type');
    }
    const employee = this.#employees.find((employee) => employee.firstName === firstName);

    if (this.#employees.find((employee) => employee.firstName === firstName)) {
      return employee;
    } else {
      throw new Error('There is no employee with provided name');
    }
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Input correct employee');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    if (typeof firstName !== 'string') {
      throw new Error('Name must be a string type');
    }

    const employee = this.#employees.find((employee) => employee.firstName === firstName);

    if (employee) {
      return employee;
    } else {
      throw new Error('There is no employee with provided name');
    }
  }

  removeEmployee(firstName) {
    this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, employee) => (sum += employee.salary), 0);
  }
}
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
