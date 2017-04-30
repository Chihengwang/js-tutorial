//do {
        //    var pwd = prompt("password. [0:exit]", "aaa");

        //    if (pwd == "0") break;

        //} while (pwd != "111");

        //alert("finish");

        //===============================
        //for (var i = 0; i < 5; i++) {
        //    for (var j = 0; j < 3; j++) {
        //        console.log(i, j);
        //    }
        //}

     
        //for (var i = 0; i < 5; i++) {
        //    for (var j = 0; j < 3; j++) {
        //        if (j == 2) break;
        //        console.log(i, j);
        //    }
        //}

        out: for (var i = 0; i < 5; i++) {
             for (var j = 0; j < 3; j++) {
                 if (j == 2) break out;
                 console.log(i, j);
             }
         }