//// print all numbers between -10 and 19
//
//(function() {
//
//    console.log("Loop 1");
//    
//    var i = -10; 
//while(i < 20) {
//    console.log(i);
//    i++; 
//}
//    
//}()); 
//
////print all even numbers between 10 and 40
//(function() {
//    
//    console.log("Loop 2");
//    
//    var i = 10; 
//    while (i < 41) {
//        
//        if(i % 2 === 0) {
//            console.log(i);
//        }
//        i++;
//        
//    }
//    
//    
//}());
//
////print all odd numbers between 300 and 333
//(function() {
//    
//    console.log("Loop 3")
//    var i = 300; 
//    while (i < 334) {
//        
//        if(i % 2 != 0) {
//            console.log(i); 
//        }
//        i++;
//    }
//    
//    
//    
//}()); 
//
////print all numbers divisible by 5 AND 3 between 5 and 50
// 
//(function() {
//    
//   console.log("Loop 4"); 
//    var i = 5; 
//    while (i < 51) {
//        
//        if((i % 5 === 0) && (i % 3 ===0)) {
//            console.log(i); 
//        }
//        i++;     
//    }
//}())

//(function() {
//    
//
//    while (1) {
//       var answer = prompt("Are we there yet");
//        if(answer == "yes" || answer == "yeah") {
//            console.log("yay we made it");
//            break;
//        }
//        
//    }
//
//    
//    
//}())

// print all numbers between -10 and 19

(function() {
    
    console.log("Loop 1");
    
for(var i = -10; i < 20; i++) {
    console.log(i);
}
}()); 


//print all even numbers between 10 and 40
(function() {
    
    console.log("Loop 2");
    
    for(var i = 10; i < 41; i++) {
        
        if(i % 2 === 0) {
            console.log(i);
        }
    }
    
}()); 


//print all odd numbers between 300 and 333
(function () {
    
   console.log("Loop 3");
    for(var i = 300; i < 334; i++) {
        
        if(i % 2 != 0) {
            console.log(i);
        }
        
    }
    
}());


//print all numbers divisible by 5 AND 3 between 5 and 50

(function() {
 
    console.log("loop 4");
    
    for(var i = 5; i < 51 ; i++) {

        if(i % 3 === 0 && i % 5 === 0 ) {
            
            console.log(i);
        }
        
    }
    
    
}())





