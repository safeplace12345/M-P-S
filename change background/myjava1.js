const colorbtn = document.querySelector('.colorbtn');
const bodybcg = document.querySelector('body');
 
let colors =['green','blue','red','orange','brown'];

colorbtn.addEventListener('click',myfunction);

function myfunction(){
	//bodybcg.style.backgroundColor = colors[0];
	let random = Math.floor(Math.random()*colors.length);
	bodybcg.style.backgroundColor = colors[random];
}