const counter =document.querySelector('.counter');
const addUp =document.querySelector('#countUp');
const countDown =document.querySelector('#countDown');

let count = 0 ;

addUp.addEventListener('click',increment);
countDown.addEventListener('click',decrement);

function increment(){
	count++;
	counter.innerHTML = count;
	
		counter.style.color="green";
	
}
function decrement(){
	count--;
	counter.innerHTML = count;
	
		counter.style.color="red";
	
} 