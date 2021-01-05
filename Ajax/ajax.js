function ajax1(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
       if( this.readyState == 4 && this.status == 200){
           document.getElementById('ajax1').innerHTML = this.responseText;
       }
    };
    xhttp.open('GET','ajax-info.txt',true)
    xhttp.send();
    
}