//var s = [1, 3, 4, 7, 11];

        //for (var i = 0; i < s.length; i++) {
        //    console.log(s[i]);
        //}
        //===========================
        //forin
        //var s = [1, 3, 4, 7, 11];
       
        //for (var i in s) {  //array
        //    //console.log(i)  //index
        //    console.log(s[i]);  //value
        //}
        //===========================
        var book = { title: "js", price: 400 };

        //console.log(book.title);
        //console.log(book["title"]);
        //forin裡面要放物件
        for (var i in book) {
            //console.log(i); //property name
            console.log(typeof i);
            console.log(book[i]);
        }