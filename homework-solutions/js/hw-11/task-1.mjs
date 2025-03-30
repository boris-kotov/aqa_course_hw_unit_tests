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
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Please input valid last name');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Please input valid profession');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== 'number' || value < 0) {
      throw new Error('Please input valid salary');
    }
    this.#salary = value;
  }
}

const employee1 = new Employee('Boris', 'Kotov', 'QA', 2800);
console.log(employee1);

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100

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
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp2 = new Employee('John', 'Doe', 'Developer', 3000);
const emp3 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp2);
company.addEmployee(emp3);
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo());

export { Employee, Company };
