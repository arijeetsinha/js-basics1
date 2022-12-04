//npm-node package manager
//npm init->to start node project
const cowsay = require("cowsay");


const Quote = require('inspirational-quotes');

const args={
    text : Quote.getRandomQuote(),
    e : "<>",
    T : " U",
};
console.log(
    cowsay.say(args)
);