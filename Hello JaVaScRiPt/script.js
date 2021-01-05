const manipulate = document.getElementById('manipulate')
manipulate.innerHTML = manipulate.innerText.split('')
.map(word => word.length > 5? '<span style="background-color:yellow">word</span>)' : word).join('');