document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});

var churchill = {
	'name': "Winston Churchill",
	'year': 1940,
	'BCE': false


}

var ghandi = {
	'name': 'Ghandi',
	'year': 1942,
	'BCE': false
}

var philip = {
	'name': 'The Third Phillipic',
	'year': 342,
	'BCE': true
}

var speecharray = ['churchill','ghandi', 'philip'];

var difference =  [ghandi.year]  -  [churchill.year] 

document.body.onload = function years() { 
	console.log("Ghandi's speech and Churchill's speech are "+ [difference] +" years apart.")
}

function display() {
	console.log("There are "+ speecharray.length +" speeches on the page.")
}

function infochurchill() {
	console.log("This speech was written by "+ churchill.name +" in "+ churchill.year +". It is "+ churchill.BCE +" that this year is B.C.E.")
}

function infoghandi() {
	console.log("This speech was written by " + ghandi.name +" in "+ ghandi.year +". It is "+ ghandi.BCE +" that this year is B.C.E.")
}

function infophilip() {
	console.log("This speech was written by "+ philip.name +" in "+ philip.year +". It is "+ philip.BCE +" that this year is B.C.E.")
}