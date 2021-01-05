let string = "Hello world, how are you";
let reg =/how/;
let result = reg.test(string);
document.getElementById('reg1').innerHTML = result;