const btn1 = document.querySelector('.btn1');
const demo = document.querySelector('#demo')
btn1.addEventListener('click',mySimple1);

function mySimple1(){
	let time = new Date().getHours();
	let greeting;
	if (time < 10){
		greeting = "Good morning Elvis";
	}else if(time < 20){
		greeting = "Good day Elvis";
		
	}else {
		greeting ="Good night Elvis";
	}
	demo.innerHTML = greeting;
	alert(greeting);
}

function mySwitch(){
	let = result;
	switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";

		document.getElementById('switch1').innerHTML= result;
			alert(result);
	}
}
 const cars1 =["Ford","Volvo","Toyota","Rover"]
function loops(){
	var i ;
	var text ="This is a ";
	var len = cars1.length;
	for (i = 0 ;i < len;i++ ){
		text += cars1[i] + "<br>";
		document.getElementById('loop').innerHTML = text;
	}
	
}
function whileloop(){
	var i = 0;
 var text1 ="";
 while(i < 10){
 	text1 += "This is number " + i + "<br>";
	 i++;
 }
 document.getElementById('whileloop').innerHTML = text1;
}

function dowhileloop(){
	 var i = 0;
	var text ="";
	do{
		text += "<br>"+ "This is number: " + i + "<br>";
		i++;
	}while (i < 5);
	document.getElementById('dowhile').innerHTML = text;
}