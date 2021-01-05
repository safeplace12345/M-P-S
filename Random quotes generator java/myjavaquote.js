const qoutebtn = document.querySelector('qoutebtn');
const quote =document.querySelector('qoute');
const quoteaurthor =document.querySelector('qouteaurthor');
quotebtn.addEventListener('click',myfunction);
const myQuotes =[{
	name:'aurthor name 1',
	quote:'hahahahahahahah'
},{
	name:'aurthor name 2',
	quote:'stay alive for now'
},{
	name:'aurthor name 3',
	quote:'reach him.......'
},{
	name:'aurthor name 4',
	quote:'survival for ......'
},{
	name:'aurthor name 5',
	quote:'man shall live'
},{
	name:'aurthor name 6',
	quote:'what dosent kill you makes you stronger'
},{
	name:'aurthor name 7',
	quote:'Have faith'
}
	];



function myfunction(){
	let index = Math.floor(Math.random()*myQuotes.length);
		
	
	quote.innerHTML= myQuotes[index].quote;
	quoteaurthor.innerHTML = myQuotes[index].name;
}