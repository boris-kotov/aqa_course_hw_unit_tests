/* 
1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
4. Создайте тип UserType из объекта QA (используйте typeof)
5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
10. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
    function wrapInArray<T> {
      // ваш код здесь
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']

11. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).

    function getLastItem<T> {
      // ваш код здесь
    }

    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c'
 */

interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}

const QA: IEmployee = { name: 'Boris', salary: 42, isManager: false };

type EmployeeKeys = keyof IEmployee;

type QaKeys = keyof typeof QA;

type UserType = typeof QA;

type OptionalEmployee = Partial<IEmployee>;

type GetNameAndSalary = Pick<IEmployee, 'name' | 'salary'>;

type GetEmployeeWithoutManager = Omit<IEmployee, 'isManager'>;

type ReadonlyEmployee = Readonly<IEmployee>;

type RecordedFromQa = Record<string, QaKeys>;

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numberArray = wrapInArray(5); // [5]
// console.log(numberArray);
const stringArray = wrapInArray('Hello'); // ['Hello']
// console.log(stringArray);

function getLastItem<T>(arr: T[]): T {
  if (!arr || arr.length === 0) {
    throw new Error('Please input valid not empty array');
  }

  let item = arr.at(-1);

  if (item === undefined) {
    throw new Error('Please input valid not empty array');
  }
  return item;
}

console.log(getLastItem([1, 2, 3, 4])); // 4
console.log(getLastItem(['a', 'b', 'c'])); // 'c'
