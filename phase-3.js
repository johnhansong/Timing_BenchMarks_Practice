const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const result = []

  for (let i = increment; i <= 10 * increment; i += increment){
    let startTime = Date.now()
  result.push(addNums(i))
  let endTime = Date.now()

  console.log(`${endTime - startTime}`)
  }
  return result

}


function addManyNums10Timing(increment) {
  const result = []

  for (let i = increment; i <= 10 * increment; i += increment){
  result.push(addManyNums(i))
  }
  return result

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);