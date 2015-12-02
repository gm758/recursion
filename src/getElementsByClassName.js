// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var arr = [];
  var dom = document.documentElement;
  var domTraversal = function(elem) {
	if (elem.className && elem.className.split(" ").indexOf(className) !== -1) {
      arr.push(elem);
	}
	elem = elem.firstChild;
    while(elem) {
		domTraversal(elem);
		elem = elem.nextSibling;
	  } 
  }
  domTraversal(dom);
  return arr;
};
