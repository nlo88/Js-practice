// for of
// for in
// filter
// find
// findIndex
// map
// reduce
// every
// some
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

for (let user of users){
    console.log (user)
}

const user = users[0]
for(let userProp in user) {
    console.log(userProp) // name // age // give you properties
    console.log(userProp, user[userProp]) // name Karen // age: 35
}




