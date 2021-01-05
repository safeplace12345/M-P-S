const msgOut= document.querySelector('#msgOut');
const btn = document.querySelector('.btn');
const msgIn = document.querySelector('#msgIn');
btn.addEventListener('click',sendMsg);

function sendMsg(){
	let input = msgIn.value;
	//console.log(input);
	if(input ===""){
		alert('Write a message')
	}else{
	msgOut.innerHTML = input;
	msgIn.value ="";}
}