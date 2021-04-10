var profilePicObj = document.getElementById("profileImg");
var buttonZero = document.getElementById("button0");
var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var prevButton = buttonOne;

buttonZero.addEventListener("click",function(){
	profilePicObj.src = "media/image0.jpeg";
	buttonZero.style.backgroundColor = "black";
	prevButton.style.backgroundColor = "white";
	prevButton = buttonZero;
});

buttonOne.addEventListener("click",function(){
	profilePicObj.src = "media/image1.jpeg";
	buttonOne.style.backgroundColor = "black";
	prevButton.style.backgroundColor = "white";
	prevButton = buttonOne;
});

buttonTwo.addEventListener("click",function(){
	profilePicObj.src = "media/image2.jpeg";
	buttonTwo.style.backgroundColor = "black";
	prevButton.style.backgroundColor = "white";
	prevButton = buttonTwo;
});


