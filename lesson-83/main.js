// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     john: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.john)

// users.john.sayHello('Анна')

// const users = [
//     {
//         name: 'alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'john',
//         age: 20,
//         isAdmin: true
//     }
// ]

// users.push({
//     name: 'Ivan',
//     age: 30,
//     isAdmin: false
// })

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// const foo = 'Hello world'
// console.log(foo.toUpperCase())

// ============================================================================

// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).
// 2) Создайте метод объекта, который в качестве аргумента будет 
// принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). 
// Объявите отдельную переменную, в которой будет храниться количество простых пользователей, 
// начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте 
// к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.


// ============================================================================

// const me = {
//     daniil: {
//         age: 23,
//         isAdmin: true,
//         height: 176,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(me.daniil.sayHello('Anna'));

// ============================================================================

let simpleUser = 0

const users = [
    {
        name: 'john',
        age: 22,
        isAdmin: false
    },
    {
        name: 'Anna',
        age: 24,
        isAdmin: false
    },
    {
        name: 'daniil',
        age: 23,
        isAdmin: true
    },
    {
        name: 'Yulia',
        age: 25,
        isAdmin: false
    },
]

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        simpleUser++
    }
}

console.log(simpleUser)