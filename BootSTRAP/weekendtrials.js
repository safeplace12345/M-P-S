//basic object ES5 and lower

function getAnnualSalary(){
let bSalary = 30;
let overtime = 10;
let taxRate = 7;

    let total = bSalary + overtime / taxRate;
    return total;
}
console.log(getAnnualSalary())

let employee = {
    baseSalary : 30,
    overtime: 10,
    taxRate: 7,
    AnnualSalary : function(){
        console.log(this.baseSalary * this.overtime / this.taxRate)
    }
}
console.log(employee.AnnualSalary())

//Factory functions
function makeCar(rims,tyre){
    return {
        rims: rims,
        tyre:tyre,
        make: function (){
            console.log('I am a car')
        }
    }
}
const car = makeCar('Silver','Radial');
console.log(car.make())
console.log(car.rims)

// Constructor functions

function Makecar(rim){
    this.rims = rim,
this.tyre = 'Radial',
this.make = function (){
    console.log('I am a car')
}
}

const car2 = new Makecar('Gold');
console.log(car2.make())

// Primitive and refrence types of data
let x = 10;
let y = x;
 x = 20;

console.log(x.value)

//Ref types
 let xx = {value:10}
 let yy = xx;

xx.value = 20;

// check properties of the MakeNewcar object
function MakeNewcar(rim){
    this.rims = rim,
this.tyre = 'Radial',
this.make = function (){
    console.log('I am a car')
}
}

const car3 = new MakeNewcar('Gold');
console.log(car3.make())

for (let key in car3){
    // we can use an if to eliminate methods from our output
    if(typeof car3[key] !== 'function'){
console.log(key);
    }
    console.log(key,car3[key]);
}
 // easyway of checking all properties

 let val = Object.keys(car2)
 console.log('Result of Object.keys = ' + val)

 //check for individual props

 if('tyre' in car3){
     console.log('Yes tyres exist in car3')
 }

 if ('make' in car2){
     console.log('Yes i have a make')
 }

 // Create my own map method

 var s = [24,25,26,27];
 Array.prototype.mymap = function(callback){
     let newArray = []
     for(var i = 0; i < this.length;i++){
newArray.push(callback(this[i]))
     }
     return newArray;
 }

 var new_s = s.mymap(function(item){
     return item*2;
 })
 console.log('For loop to create a map function ' +new_s)

 //or using the forEach method

 Array.prototype.mymap2 = function(callback){
     let newArrays = [];
     this.forEach(item => newArrays.push(callback(item)))
 return newArrays;
    }

    const p = s.mymap2(function(item){
        return item *2;
    })
    console.log('Foreach loop to return a mapped array ' + p)

    //Given a year, check if it a leap year( year / 4 = 0)

    const isleapyear = (year) => year % 4 == 0;
console.log('Leap years')
    console.log(isleapyear(2012))
    console.log(isleapyear(2016))
    console.log(isleapyear(2018))
    console.log(isleapyear(2026))
// Program to compare 2 objects for same properties
//ie {a:1,b:2,c:3} {a:2,b:2,c:5} {a:3},d:4,c:2} 

const iseveryKey = (objA,objB) => {
    return Object.keys(objA).every(obj => objB[obj])
}
const is_every = (objA,objB) => {
    let result ="";
    for(var i = 0; i < objA.length; i++){
        if(Object.key(objA[i]) === Object.key(objB[i])) {
            result.concat( 'true');
        } result += 'false';
    }  
    return result;
}
console.log("Compare Objects")
console.log(iseveryKey({a:1,b:2,c:3} ,{a:2,b:2,c:5} ))
console.log(iseveryKey({a:1,b:2,c:3} ,{a:3,d:4,c:2}))
console.log(iseveryKey( {a:3,d:4,c:2},{a:3,d:4,c:2}))
console.log(is_every({a:1,b:2,c:3} ,{a:3,d:4,c:2}))
console.log(is_every({a:3,d:4,c:2},{a:3,d:4,c:2}))

// converting a string into a 2D array ie = 'abc,sdf,rhu,ewj,woi,wij,woi,thj'
var str0 =('abc,dfe,shg, jgfu,sju,msi, shty,dyh,hgt')
const twoDarray = (str) => str.split(',').map(fun => fun.split(''));
console.log(twoDarray(str0));
// Return a hexadecimal string ie #FGH567
// create random number into a string first
const getRandomnumber = () => {
   return  Math.floor(Math.random() * 16).toString(16)
}
//done
//create a string

const getHexDec = (fun) => {
    return '#' + Array.from({length:6}).map(fun).join('')
}
console.log(getHexDec(getRandomnumber))

// Replacing a string type into its corresponding HTML tag eg; '&' to '&amp'
const turnToHtml = (str) => {
    let newstr = str.split('');
    for(var i = 0; i < newstr.length;i++){
         
        switch(newstr[i]){
            case '&':
                newstr[i] = '&amp'
                break;
                case '<':
                    newstr[i] = '&lt'
                    break;
                    case "'":
                        newstr[i] = '&apos'
                        break;
                        case '>':
                            newstr[i] = '&gt'
                            break;
        }
        
    }
    newstr = newstr.join('')
    return newstr;
}

console.log(turnToHtml('Dolce & Gabana'))
console.log(turnToHtml('<div>'))

//sum of fibonacci numbers in a range

const sumFib = (num) => {
    let result = 0;
    //present is the starting number
    let presentnum = 0;
    // next number in sequence for fibonacci formulas
    let currentnum = 1;
    // loop through every count of current number
    while(currentnum <= num){
        //check if the currentnum is divisable by 2, if not then we are good
        if(currentnum % 2 !== 0){
            result += currentnum
        }
        currentnum += presentnum
        presentnum = currentnum - presentnum
    }
    
    return result
}
console.log(sumFib(4))
console.log(sumFib(5))
console.log(sumFib(40))
console.log(sumFib(11))

// Returning prime numbers with a given parameter

function sumprimes(num){
let sum = 0;
let i = 1;
while(i <= num){
    // isPrime is another function that checks a number and returns true
    if(isPrime(i)){
        sum += i
    }
    i++
}
return sum
}
//linked is\prime function
function isPrime(x){
    for(let i = 2; i < x; i++){
        if(x % i === 0) return false
    }
    return x !== 1 && x !== 0;
}

console.log(sumprimes(10))