// for of
// for in
// filter
// find
// findIndex
// map
// reduce
// every is similar to &&
// some is similar to || 
// entries
// includes
// splice
// slice
// concat

const users = [
    { name: "Karen", age: 35 },
    { name: "Omar", age: 21 },
    { name: "Jin", age: 25 },
    { name: "Ismael", age: 26 },
    { name: "James", age: 40 },
    { name: "Caroline", age: 39 },

];

//console.log(users);

// for (let user of users){
//     console.log (user)
// }

// const user = users[0]
// for(let userProp in user) {
//     console.log(userProp) // name // age // give you properties
//     console.log(userProp, user[userProp]) // name Karen // age: 35
// }

// const filteredUsers = users.filter((user) => {
//     return user.age < 30;
// });

// console.log(filteredUsers)

// const findUser = users.find(user => {
//     return user.name === 'James'
// })
// console.log(findUser)

// const findIndex = users.findIndex(user => {
//     return user.name === 'Jin';
// })
// console.log(findIndex)


// const names = users.map(user => {
//     return {
//     ...user,
//     description: `${user.name} is ${user.age} years old`
//     }
// })

// console.log(users)
// console.log(names)

// const reduceUsers = users.reduce((acc, user) => {
//     if (user.age > 30){
//         return acc;
//     }
//     acc[user.name] = user;
//     return acc;
// }, {})

// console.log(reduceUsers)

// const kidUsers = users.every(user => user.age < 10);
// const youngUsers = users.every(user => user.age > !40);

// console.log(kidUsers)
// console.log(youngUsers)