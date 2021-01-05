let string = "Hello world, how are you";
let reg =/how/;
let result = reg.test(string);
document.getElementById('reg1').innerHTML = result;

function myReg1(){
	let waldo ="some where waldo is hiding";
	let reg =/Waldo/;
	let result =reg.test(waldo);
	document.getElementById('reg2').innerHTML = result;
	
}

function myReg2(){
	let example = 
		"My dog play with cats along with birds to find a pet";
	let myreg =/dog|cats|fish/;
	let result = myreg.test(example);
	document.getElementById('reg3').innerHTML = result;
}
function myReg3(){
	let example = 
		"My dog play with cats along with birds to find a pet";
	let myreg =/Dog|CatS|fiSh/i;
	let result = myreg.test(example);
	document.getElementById('reg4').innerHTML = result;
	alert(result);

}
function mymatch(){
	let example = 
		"My dog play with cats along with birds to find a pet";
	let myreg =/dog/;
	let result = example.match(myreg);
	document.getElementById('match1').innerHTML = result;
	alert(result);
}
function mymatch1(){
	let example = 
		"Repeat, repeat,RepeaT";
	let myreg =/repeat/ig;
	let result = example.match(myreg);
	document.getElementById('match2').innerHTML = result;
	alert(result);
}
function mymatch2(){
	let example = 
		"I,ll hum a song";
	let myreg =/um./;
	let result = example.match(myreg);
	document.getElementById('match3').innerHTML = result;
	alert(result);
}