<!DOCTYPE html><html><head><title></title></head><body style="background:#ddd">
<p>
<script type="text/javascript">"use strict";
(function(w){function doNothing(){};
var d=w.document,script=doNothing;
if(d){
//
	var FixProp=function(o,p,x){var e=o[p];if(!e){e=o[p]=x};return e};
//

//
	var Obj={
	 Create:FixProp(Object,'create',function(o){function f(){};f.prototype=o;return new f}),
	 Freeze:FixProp(Object,'freeze',function(o){o.lock=1;return o}),
	 isFrozen:FixProp(Object,'isFrozen',function(o){return o.lock})//,...
	};
//
	var Make=Obj.Freeze({
	 anObj:function(p,k,c){var e=Obj.Create(c||null,p||{});if(k){e=Obj.Freeze(e)};return e}//,...
	})
//
//

console.dir();


};w.run=script})(window);
//
//
</script>
<a href="javascript:run();">RUN CODE</a>
</p>
</body>
