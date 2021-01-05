var table = document.getElementById('mytable')
var body = document.getElementById('main')
function changebg() {
body.style.backgroundColor = 'darkslategray' 
body.style.color = 'white'   
}
function revert(){
  body.style.backgroundColor = 'crimson'
  body.style.color = 'black'
}
function displayDate(){
  try1.innerHTML = Date();
  }
  function gocheck() {
    var text = '';
    if(navigator.cookieEnabled == true){
      text += 'Cookies are enabled'  
    }else{
      text += 'Cookies are disabled'  
    }
    document.getElementById('try2').innerHTML = text;
  }
  function trythis2 (){
    try3.attribute = 'Francesca';
    try3.innerHTML = 'Francesca';
  }
function trythis3(){
    document.write('Hello in a new page');
 }
function forms1(){
      let x = document.forms['frm1'];
      let text ='';
      var i ;
      for(i = 0 ; i < x.length; i++){
  text += x.elements[i].value + '<br>'
      }
      document.getElementById('result2').innerHTML = text;
}

function mover(obj){
  obj.style.backgroundColor = 'red'
  obj.style.color = 'white';
}
function mout(obj){
  obj.style.backgroundColor ='aqua'
  obj.innerHTML = 'Mouse out';
}
function mdown(obj){
  obj.innerHTML = 'Release me'
}
var x_x = document.getElementById('newBtn');
  x_x.addEventListener('click', clicked)
  x_x.addEventListener('mouseout', mouseOut)
  x_x.addEventListener('mouseover', mouseOver)

  function clicked(){
    document.getElementById('events').innerHTML += 'Clicked!'
  }
  function mouseOver(){
    document.getElementById('events').innerHTML += 'Mouse Over!'
  }
  function mouseOut(){
    document.getElementById('events').innerHTML += 'Mouse Out!'
  }
  var parent = document.getElementById('contain1')
  var child = document.getElementById('tests');
  var z =document.getElementById('deletetext2');
  
  z.addEventListener('click', myfun)
  function myfun(){
    parent.removeChild(child);
  }
  
    // create new node for replacing
    var para = document.createElement('p')
    var node = document.createTextNode('That was Awesome , aint it?')
    para.appendChild(node);
    // new node created
    var parent1 = document.getElementById('contain2')
    var child1 = document.getElementById('test2')
    var replace_text = document.getElementById('replacetext')
    replace_text.addEventListener('click',myfun2)
    function myfun2 (){
parent1.replaceChild(para,child1);
    }
    var allPs = document.getElementsByTagName('p')
    var allPs_length = allPs.length;
    document.getElementById('allPs').innerHTML = 'There appears to be ' + allPs_length + 'paragraphs in my document so far. And paragraph twenty one says '+ allPs[20].innerHTML; 

    function changePs () {
      for(var i = 0; i < allPs_length; i++){
        allPs[i].style.color = 'green';
  }}
  function confirmit ()  {
    var textss ;
    if(confirm('Sure to proceed?')){
      textss = 'Accepted, you may continue!'
    
    }else{
      textss = 'Verification failed, Try again!'
    }
    document.getElementById('confirm').innerHTML = textss;
  }
 function login(){
   var text;
   var name = prompt('Input name please and\nLocation:','Harry Porter');
   if(name == null || name == ''){
     text = 'User cancelled login'
   }else{
     text = 'Login successfull <br>. Welcome Mr. ' + name;
   }
   document.getElementById('promptbox').innerHTML = text;
 }
 var alert_me = function alertme() {
   alert('3 second up!')
 }
 var mytimer = setInterval(timer, 1000);
 function timer(){
   var time = new Date()
   document.getElementById('timer').innerHTML = time.toLocaleTimeString();
  
 }


/*var main = document.getElementById('#main');
main.addEventListener('load', createAlert())
function createAlert  () {
    alert('Welcome Back')
  }
  createAlert2 =() => {
    alert('Save all data')
  };
  (console.log('fuck'));

var xxx = document.getElementById("myBtn");
xxx.addEventListener("click", myFunction);
xxx.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hello World!");
}

function someOtherFunction() {
  alert ("This function was also executed!");
}

var deletetext1 = document.getElementById('deletetext1');
var tests = document.getElementById('tests');

deletetext1.addEventListener('click', function (){
  tests.remove();
})*/