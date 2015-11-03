(function temp(global){
	var w=global, scope=temp;

	scope.sss=3;

	console.log(scope.sss)//3

})(window);
//
console.log(sss);//sss is not defined
