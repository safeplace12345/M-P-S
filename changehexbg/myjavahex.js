const colorbtn = document.querySelector('.colorbtn');
const bodybcg = document.querySelector('body');
const hextitle = document.querySelector('.hextitle');
const colors =[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

colorbtn.addEventListener('click',myfunction);

function myfunction(){
	let hex ="#";
	for(var i = 0; i < 6;i++){
		let random = Math.floor(Math.random()*colors.length);
		hex += colors[random];
	}
	bodybcg.style.backgroundColor = hex;
	hextitle.innerHTML = hex;
}