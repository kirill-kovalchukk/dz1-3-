let age = 13;
console.log(age);

let name = 'Кирил';
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString = 'Мрії так і залишаються мріями, якщо до них не йти';
console.log(myString);

let myNumber = 15;
let myNumber1 = 15 + 10;
console.log(myNumber1);

let myNull = null;
console.log(myNull);

let userName = prompt('Як вас звати?');
alert("Вітаю," + userName + "!");


let confirmation = confirm("Ви підтверджуєте дію?"); 
if (confirmation) {
alert("Дякую за підтвердження!"); 
} else {
alert("Дію відмінено!"); 
}

alert("Увага! Ця дія може бути небезпечною.");
let dangerousAction = confirm("Ви впевнені, що хочете продовжити?");
if (dangerousAction) {
alert("Дякую за підтвердження!");
} else {
alert("Дію відмінено!");
}