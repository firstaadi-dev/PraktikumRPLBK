//root scope
var a = 0;
console.log("ini root scope: " + a);
function q2() {
  // child scope
  a = 5;
  console.log("ini child scope: " + a);
}
console.log("ini root scope: " + a);
q2();
console.log("ini root scope: " + a);
const age = 19;
const isLegal = age > 18 ? true : false;
console.log(isLegal);

const myArray = [5,10,20]

const reducer = myArray.reduce((total, jumlah) => total + jumlah)

console.log(reducer)

const myInt = [1,4,2,6,3,5,7]

myInt.forEach(lazySort)

function lazySort(value) {
    setTimeout( () => console.log(value), value)
}