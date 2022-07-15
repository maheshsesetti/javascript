/*

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive');

//Functions

function logger() {
  console.log("My Name is Mahesh");
}

//calling/running/invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0,5);
console.log(orangeJuice);

//Function Declaration

function calAge1(birthYear){
    const age = 2037-birthYear
    return age;
}

const age = calAge1(1995);

console.log(age);

//Function Expression

const calAge2 = function (birthYear){ // annonous function
    const age = 2037-birthYear
    return age;
}
const age2 = calAge1(1991) 

console.log(age2);*/

//function Arrow expression

const calAge3=birthYear => 2037-birthYear;
const age3 = calAge3(1991);
console.log(age3);

const calAge4=(birthYear,firstName)=>{
    const age = 2037-birthYear;
    const retirement = 65-age;
    return `${firstName} retires in ${retirement}`;
}
const age4 = calAge4(1998,'mahesh');
console.log(age4);

//calling function inside function

function cutFruitPieces(fruit){
    return fruit *4;
}

function fruitProcessor(apples, oranges) {
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
  }

  const pieces = fruitProcessor(2,4);
  console.log(pieces0);


