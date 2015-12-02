// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var arr = [];
  var body = document.body;
  var domTraversal = function(elem) {
	if (elem.classList && elem.classList.contains(className)) {
      arr.push(elem);
	}
	var children = elem.childNodes;
    for (var i = 0; i < children.length; i++) {
		domTraversal(children[i]);
	  } 
  }
  domTraversal(body);
  return arr;
};
