<!DOCTYPE html><html><head></head><body style="background:#ddd"><p><script type="text/javascript">
//
/*
ReqirePolyfill:
*/
//
(function(w){function doNothing(){};var d=w.document,script=doNothing;
if(d){
//
	function FixProp(o,p,x){var e=o[p];if(!e){e=o[p]=x};return e};
//
	FixProp(Object,'seal',doNothing);
//
	var Obj=Object.seal({
	 Create:FixProp(Object,'create',function(o){function f(){};f.prototype=o;return new f}),
	 Freeze:FixProp(Object,'freeze',function(o){o.lock=1;return o}),
	 isFrozen:FixProp(Object,'isFrozen',function(o){return o.lock})//,...
	});
//
	anObj:function(p,k,c){var e=Obj.Create(c||null,p||{});if(k){e=Obj.Freeze(e)};return e}});
//


};w.run=script})(window);
//
//
</script><a href="javascript:run();">RUN CODE</a></p></body></html>
