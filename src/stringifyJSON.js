// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log('test');
  if (obj === null) return "null";
  if (obj === undefined) return;
  if (typeof obj === "function") return;
  
  if (typeof obj === "number") return obj.toString();
  if (typeof obj === "boolean") return obj.toString();
  if (typeof obj === "string") return '"' + obj + '"';
  
  if (Array.isArray(obj)) {
	  var result = "[";
      for (var i = 0; i < obj.length; i++) {
		result += stringifyJSON(obj[i]);
		if (i < obj.length - 1) result += ",";
	  }
	  return result + "]";
  }
  
  var result = "{";
  for (var elem in obj) {
	  if (stringifyJSON(obj[elem]) === undefined) continue;
	  result += stringifyJSON(elem) + ":" + stringifyJSON(obj[elem]) + ",";
  }
  if (result.length > 1) result = result.slice(0, -1);
  return result + "}";


};
