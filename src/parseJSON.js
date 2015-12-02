// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === "null") return null;
  if (json === "true") return true;
  if (json === "false") return false;
  if (!isNaN(json)) return +json
  if (json[0] === "[") 
	return json.slice(1,-1).split(",")
  
  if (json[0] === "{") {
	var jsonObj = {};
	
  }
  
  
  
};
