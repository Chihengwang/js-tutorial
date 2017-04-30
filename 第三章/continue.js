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
         }//把外部這個標籤的out迴圈跳出
//for (var i = 1; i < 11; i++) {
        //    if (i % 2 == 0) continue;
        //    console.log(i);
        //}
        //===============================
        //for (var i = 0; i < 5; i++) {
        //    for (var j = 0; j < 4; j++) {
        //        console.log(i, j);
        //    }
        //}

     
        for (var i = 0; i < 5; i++) {
           for (var j = 0; j < 4; j++) {
               if (j == 2) continue;//continue是內部迴圈
               console.log(i, j);
           }
        }

        // out: for (var i = 0; i < 5; i++) {
        //      for (var j = 0; j < 4; j++) {
        //          if (j == 2) continue out;
        //          console.log(i, j);
        //      }
        //  }