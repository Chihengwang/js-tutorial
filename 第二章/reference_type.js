        var i = 10;
        var j = 10;
        console.log(i == j);  //true

        var s = "demo";
        var s2 = "demo";
        console.log(s == s2); //true


        var o = { i: 10 };
        var o2 = { i: 10 };
        console.log(o == o2); //false

        var o3 = o;
        console.log(o==o3); //true
        console.log(o.i);
        o3.i=200;
        console.log(o3.i);
        console.log(o.i);//指向同一個記憶體 所以會更改其數值
        