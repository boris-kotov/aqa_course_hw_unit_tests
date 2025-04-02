/* Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
 */

async function createTodo(body) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'post',
      body: JSON.stringify(body),
    });

    if (response.status !== 201) {
      throw new Error(`Response status is ${response.status} which is not 201`);
    }

    const data = await response.json();
    console.log(data)
    // к сожалению, оно возвращает только id
    Object.keys(body).forEach((key) => {
      if (body[key] !== data[key]) {
        throw new Error(`Wrong key received. Expected ${body[key]}, received ${data[key]}`);
      }
    });

    return data;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Function execution completed');
  }
}

createTodo({ userId: 11, title: 'trying hard', completed: false });
