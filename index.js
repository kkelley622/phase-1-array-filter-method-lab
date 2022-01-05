// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return result
}

function fuzzyMatch(drivers, string) {
    const driverLetters = drivers.filter(element => element[0] === string[0])
    return driverLetters
}


function matchName(drivers, string) {
    const nameHometown = drivers.filter(element => element.name === string)
    return nameHometown
}