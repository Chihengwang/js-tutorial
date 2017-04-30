//join
        //var ar = ["Spring", "Summer", "Autumn", "Winter"];
        //console.log(ar.toString()); //Spring,Summer,Autumn,Winter
        //console.log(ar.join("-"));
        //console.log(ar.join("$"));

        //===============================================
        var ar = [];
        //ar.push("Spring");
        //ar.push("Summer");
        //ar.push("Autumn");
        //ar.push("Winter");

        ar.unshift("Spring");//ar[3]
        ar.unshift("Summer");//ar[2]
        ar.unshift("Autumn");//ar[1]
        ar.unshift("Winter");//ar[0]
        //unshift means put the new item in the first index.
        
        //console.log(ar.pop()); 
        //console.log(ar.pop());    
        //console.log(ar.pop());
        //console.log(ar.pop());

        console.log(ar.shift()); 
        console.log(ar.shift());
        console.log(ar.shift()); 
        console.log(ar.shift());