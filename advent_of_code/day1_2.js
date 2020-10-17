const {moduleMassArray} = require ("./day1.js")

function calculateTotalFuel(massArray){
    let totalFuel = 0
    for (const currentMass of massArray){
        const moduleFuel = calcModuleFuel(currentMass);
        totalFuel += moduleFuel;

    } 
    return totalFuel
}
 
function calcModuleFuel(moduleMass){
    let totalModuleFuel = (Math.floor(moduleMass / 3)-2);
    let remainingMass = totalModuleFuel;
    while (remainingMass >= 9){
        const fuelForFuel = (Math.floor(remainingMass / 3)-2); 
        totalModuleFuel += fuelForFuel;
        remainingMass = fuelForFuel;
    }
    return totalModuleFuel;
}
console.log(calculateTotalFuel(moduleMassArray))