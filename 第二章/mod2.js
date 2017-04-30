class Rect{
	constructor (width,height){
		this._width=width;
		this._height=height;
	}
	get width(){return this._width}
	get height(){return this._height}


	get area(){return this.width*this._height}
}
var r=new Rect(50,20)
var b=r.area;
console.log(b);
console.log(1==true)//ture
var married= true;
var obj={};
var obj2=null;
console.log(married===1)//flase,型別不一樣。
if ("aaaa") {
	console.log(1);//假如空值的話 不會成立。
}
if (NaN) {
	console.log(2);//不會被輸出因為上面條件是NaN，只有在非零的數字才會成立
}
if (324) {
	console.log(3);//不會被輸出因為上面條件是NaN，只有在非零的數字才會成立
}
if (obj) {
	console.log(4);//因為obj的參數不是null所以會被輸出
}
if (obj2) {
	console.log(5);//不會被輸出 因為值為null
}
var s="200"

console.log(parseInt(s)+100);

var s="$1,000,000"
console.log(parseInt(s));//NaN
console.log(s.replace(/[$,]/g,""));
//var s = prompt("number:", 100);
        //console.log(s+100);
        //=========================
        //var n1 = 10;
        //console.log(n1);
        //var n1 = 10.5;
        //console.log(n1);
        //=============================
        //var n1 = Number(true); //1
        //console.log(n1);
        //var n1 = Number(false); //0
        //console.log(n1);
        //var n1 = Number("100"); //100
        //console.log(n1);
        //var n1 = Number("Mary"); //NaN
        //console.log(n1);
        //var n1 = Number(NaN); //NaN
        //console.log(n1);
        //var n1 = Number(null); //0
        //console.log(n1);
        //var n1 = Number(undefined); //NaN
        //console.log(n1);
        //============================
        //var i = "100", j = 200;
        //console.log(Number(i)+j);
        ////============================
        //var i = "100", j = 200;
        //console.log(parseInt(i)+j);
        //============================
        //Number vs parseInt
        //var i = "100Demo", j = 200;
        //console.log(parseInt(i) + j);
        //console.log(Number(i) + j);
        //============================
        //var n1 = parseFloat("100.2"); 
        //console.log(n1);
        //============================
        //var s = "$1,000,000";
        //console.log(parseInt(s));   //NaN

        ////var rg = new RegExp("[$,]", "g");
        ////console.log(s.replace(rg, ""));

        //console.log(s.replace(/[$,]/g, ""));
        //============================
        var i = 1.21, j = 1.31, m = 1.41;
        console.log(i + j);
        console.log(i + j + m);
        console.log((i + j + m).toFixed(2));