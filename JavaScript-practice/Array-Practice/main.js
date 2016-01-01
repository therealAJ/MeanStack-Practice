var testArray = [1, 2, 3, 4, 5];
var testArray1 = ["a", "b", "c", "d"];
var uniformArray = [1, 1, 1, 1, 1, 1];
var uniformArray1 = ["a", "a", "a", "a"];

function printReverse(arr) {


    for (var i = arr.length; i >= 0; i--) {
        console.log(arr[i]);
    }


}

function isUniform(arr) {

    var equal = 0;
    var unequal = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1]) {
            equal = 1;
        } else unequal = 1;

    }

    if (equal === 1) {
        return true;
    } else return false;


}

function sumArray(arr) {
    
    var total = 0; 
    
    arr.forEach(function(index) {
        
        total += index; 
    });
    
    return total; 
   
}

function max(arr) {
    
    
    var max = 0; 
    
    for(var i = 0; i < arr.length; i++) {
        
        if(arr[i+1] > arr[i]) {
            max = arr[i+1];
        } 
    }
    
    return max; 
    
}