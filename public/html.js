/*
Parameters

q - search query term or phrase
limit - (optional) number of results to return, maximum 100. Default 25.
offset - (optional) results offset, defaults to 0.
rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).
lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported languages here
fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)

*/

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
	//textfield.input(newTyping);
	output=select('#output')//the indicator for the ID in HTML is the #
	submit=select('#submit')
	submit.mousePressed(newText);

}


function gotData(giphy){
	var n = giphy.data.length;
	for(var i=0;i<2;i++){
	createImg(giphy.data[i].images.original.url);
	}
	//createIMG() -> <img src="()"/>


}

function newTyping(){
	//output.html(textfield.value());
	//createP(textfield.value());
}
function newText(){
	//create element

	var query = "&q="+textfield.value()
	var url2=api+apikey+query
	createP(textfield.value());
	loadJSON(url2,gotData);
	//console.log(input.value());
}