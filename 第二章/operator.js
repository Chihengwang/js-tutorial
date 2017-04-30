//var i = 0, j = 0;
        //console.log(++i); //1  
        //console.log(j++); //0  先做讀取j的值再j+1

        //console.log(i,j); //1,1

        //i++ vs i=i+1(i+=1)
        //var i = 0;
        //i += 1;
        //console.log(i);

        //var j = 0;
        //j++
        //console.log(j);

        var i = "0";
        i += 1;
        console.log(i); //01

        var j = "0";
        j++
        console.log(j); //1
        //自動做轉型別的動作

        //var i = 10, j = 3;
        //console.log(i / j); 
        //console.log(i % j);
        //console.log(Math.floor(i/j));


        var score = 70;
        var result = score > 80 ? "good" : "bad";
        console.log(result);
        //result = 一個條件式 正確的話傳前面，錯誤的話傳後面

        // var i =90;
        // var j= i||100;
        // console.log(j);

        var i =0;
        var j= i||100;
        console.log(j);
        //if gett the flase on the left side, right side would get the number 100.


