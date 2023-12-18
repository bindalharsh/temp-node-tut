const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative flavour");

console.log(data);

sayHi(names.john);
sayHi(names.peter);
sayHi("secret");

const sum = require("./7-mind-grenade");

console.log(sum);



// const name = require("./4-names");
// const SayHi = require("./5-utils")
// const data = require("./6-alternative flavour");
// require("./7-mind-grenade");
// console.log(data);
// SayHi('Harsh');
// SayHi(name.john);
// SayHi(name.peter);
// SayHi(name.secret);