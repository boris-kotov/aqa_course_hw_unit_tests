/* Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
*/

/* function validatePassword (password: string) {
    if (password.length < 8){
        throw new Error('Password should be at least 8 symbols');
    }
    if (!/[A-Z]/.test(password)) {
        throw new Error('Password should contain at least one capital letter');
    }
    if (!/[a-z]/.test(password)) {
        throw new Error('Password should contain at least one letter in lower case');
    }
    if (!/[0-9]/.test(password)) {
        throw new Error('Password should contain at least one digit');
    }
    if ([...password].every(char => char === " ")) {
        throw new Error('Password should consist of spaces only');
    }
    return true;
}
// жалко удалять =)

validatePassword(""); */

function validatePassword(password: string) {
  return (
    password.trim() !== '' &&
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  );
}
