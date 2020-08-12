var numColors=6;
var colors=[];
var mode=document.querySelectorAll(".mode");
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var resetButton=document.querySelector("#reset");
var ansColor;
init();

function init(){
	setMode();
	setSquares();
	reset();
}
function setMode(){
	for(let i=0;i<mode.length;i++){
		mode[i].addEventListener("click",function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="EASY" ? numColors=3: numColors=6;
			reset();
		});
	}
}
function randomColor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function newColors(num){
	var arr=[];
	for(let i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function ans(){
	var x= Math.floor(Math.random()*numColors);
	return colors[x];
}
function reset(){
	colors=newColors(numColors);
	ansColor= ans();
	colorDisplay.textContent=ansColor;
	resetButton.textContent="NEW COLORS";
	messageDisplay.textContent="";
	for(let i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display= "block";
			squares[i].style.background= colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
}
function changeColors(color){
	for(let i=0;i<squares.length;i++){
		squares[i].style.display="block";
		squares[i].style.background=color;
	}
}
function setSquares(){
	for(let i=0;i<squares.length;i++){
		squares[i].addEventListener("click", function(){
			var pickedColor= this.style.background;
			if(pickedColor === ansColor){
				messageDisplay.textContent="CORRECT !!!";
				resetButton.textContent="PLAY AGAIN?";
				changeColors(ansColor);
			}
			else{
				this.style.display= "none";
				messageDisplay.textContent="TRY AGAIN !!";
			}
		});
	}
}

resetButton.addEventListener("click", function(){
	reset();
});