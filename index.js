require('dotenv').config()

function sentense() {
return `I am ${process.env.NAME}, wilder in ${process.env.CITY}, and I love ${process.env.LANGUAGE}`
}

console.log(sentense())

