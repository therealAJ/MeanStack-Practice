function isEven(int) {
    
    if(int % 2 == 0)
        return true; 
    else return false; 
}



function factorial(num) {
    
    var result = 1; 
    
    for(var i = 1; i < num ; i++) {
        
        result = result * i; 
    }   
    return result; 
}


// factorial (4) = 4 X 3 X 2 X 1