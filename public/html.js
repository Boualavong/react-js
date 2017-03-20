var api = "http://api.giphy.com/v1/gifs/search?"
var q="&q=rainbow"
var apikey="&api_key=dc6zaTOxFJmzC"

var url2=api+apikey


var textfield;
var output;
var submit;


function setup() {
	noCanvas();

	textfield= select('#textfield');
	output=select('#output')
	submit=select('#submit')
	submit.mousePressed(newText);

}


function gotData(giphy){
	var n = giphy.data.length;
	for(var i=0;i<5;i++){
	createImg(giphy.data[i].images.original.url);
	}
	//createIMG() -> <img src="()"/>
}


function newText(){
	//create element

	var query = "&q="+textfield.value()
	var url2=api+query+apikey
	createP(textfield.value());
	loadJSON(url2,gotData);
	//console.log(input.value());
}