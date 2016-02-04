var homeButton = document.getElementById("home-button");
var dogButton = document.getElementById("dog-button");
var catButton = document.getElementById("cat-button");
var homeDiv = document.getElementById("home-div");
var dogDiv = document.getElementById("dog-food-div");
var catDiv = document.getElementById("cat-food-div");


homeButton.addEventListener("click", function(){
	homeButton.classList.add("active");
	homeDiv.classList.add("visible");
	homeDiv.classList.remove("invisible");
	
	dogButton.classList.remove("active");
	dogDiv.classList.add("invisible");
	dogDiv.classList.remove("visible");
	
	catButton.classList.remove("active");
	catDiv.classList.add("invisible");
	catDiv.classList.remove("visible");
});

dogButton.addEventListener("click", function(){
	dogButton.classList.add("active");
	dogDiv.classList.add("visible");
	dogDiv.classList.remove("invisible");
	
	homeButton.classList.remove("active");
	homeDiv.classList.add("invisible");
	homeDiv.classList.remove("visible");
	
	catButton.classList.remove("active");
	catDiv.classList.add("invisible");
	catDiv.classList.remove("visible");
});

catButton.addEventListener("click", function(){
	catButton.classList.add("active");
	catDiv.classList.add("visible");
	catDiv.classList.remove("invisible");
	
	homeButton.classList.remove("active");
	homeDiv.classList.add("invisible");
	homeDiv.classList.remove("visible");
	
	dogButton.classList.remove("active");
	dogDiv.classList.add("invisible");
	dogDiv.classList.remove("visible");
});
