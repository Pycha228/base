// function sumNumbers (firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = sumNumbers(3, 10)

// console.log(result)

// console.log(sumNumbers(-2, 12))

// ===============================================================


// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]

// const checkForCopyItem = (array, item) => {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === item){
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(numbers, 2))

// ===============================================================

// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, 
// а возвращать строчку ‘Hello “аргумент функции”’.
// 2) Создайте массив чисел, далее создайте функцию, которая будет 
// принимать в качестве аргумента массив чисел. Функция должна перебирать 
// полученный массив и если число больше 10 - выводить это число в консоль.
// 3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, 
// которая будет принимать три аргумента, два числа и строку для выбора оператора. 
// При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции 
// происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем 
// разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и 
// выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

// ===============================================================
// Task 1

// function helloName (name) {
//     return `Hello ${name}`
// }
// console.log(helloName('Alex'))

// ===============================================================
// Task 2

// const number = [1, 30, 15, 2, 44, 32, 63, 21, 2, 7, 84, 90]

// function compareNumber(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 10) {
//             console.log(arr[i])
//         }
//     }
// }

// compareNumber(number)

// ===============================================================
// Task 3
// let a = null

function myCalc(firstNumber, secondNumber, string){
    if (string === 'divide' && secondNumber === 0) {
        return 'Ошибка, деление на ноль'
    } else if (string === 'minus'){
        return a = firstNumber - secondNumber
    } else if (string === 'plus') {
        return  a = firstNumber + secondNumber
    } else if (string === 'divide') {
        return a = firstNumber / secondNumber
    } else if (string === 'times') {
        return a = firstNumber * secondNumber
    }
}

console.log(myCalc(1000, 0, 'divide'))

