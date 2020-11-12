var display = document.getElementById("output");
var mini = document.getElementById("first-number");
var maxi = document.getElementById("second-number");

function tela(value){
    display.value = value;
}
function limpartela(){
    mini.value = ''
    maxi.value = ''
	display.value = ''
}




function rand(){
    var min = Number(mini.value)
    var max = Number(maxi.value)
    var result = Math.random()* (max - min) + min;
    tela(Math.round(result))
    
}