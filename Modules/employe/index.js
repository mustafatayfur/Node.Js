// let sayName = function (name){
//     console.log(`Benim adım ${name}`)
// }
// let sayAge = function (age){
//     console.log(`Benim yaşım ${age}`)
// }

// // module.exports = sayName

// module.exports = {
//     sayName : sayName,
//     sayAge : sayAge
// }


let sayName = require('./sayName')
let sayAge = require ('./sayAge')
module.exports = {
    sayName : sayName,
    sayAge : sayAge
}