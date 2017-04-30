var x=10;
var y=-1;

try {
	if(y==0){
		throw("Divide by zero.");
	}
	if(y<0){
		throw("y must greatert than zero.");
	}
	else {
		var r=x/y;
	}
} catch(e) {
	if(e=="Divide by zero."){
	console.log("Err:"+e);
	throw e;}
	else{
		console.log("Error throw:"+e);
		throw e;
	}
}