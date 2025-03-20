/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // Ваш код
  if (typeof character.name === 'string' && typeof character.age === 'number') {
    characters.push(character);
    return characters;
  } else {
    throw new Error('Invalid character data');
  }
}

function getCharacter(name) {
  // Ваш код
  if (typeof name === 'string') {
    return characters.find((character) => character.name === name);
  } else {
    throw new Error('Invalid character data');
  }
}

function getCharactersByAge(minAge) {
  // Ваш код
  if (typeof minAge === 'number') {
    return characters.filter((character) => character.age >= minAge);
  } else {
    throw new Error('Minimum age parameter is incorrect');
  }
}

function updateCharacter(name, newCharacter) {
  // Ваш код
  if (typeof newCharacter.name === 'string' && typeof newCharacter.age === 'number') {
    const oldCharacter = getCharacter(name);
    const { name: newName, age: newAge } = newCharacter;
    if (oldCharacter) {
      oldCharacter.name = newName;
      oldCharacter.age = newAge;

      return characters;
    } else {
      throw new Error('Character not found');
    }
  } else {
    throw new Error('Invalid character data');
  }
}

function removeCharacter(name) {
  // Ваш код
  if (typeof name === 'string') {
    const index = characters.findIndex((character) => character.name === name);
    if (index !== -1) {
      characters.splice(index, 1);
    } else {
      throw new Error('Character was not found');
    }
  } else {
    throw new Error('Character name is incorrect');
  }
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
