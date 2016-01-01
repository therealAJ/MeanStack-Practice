var userInput = prompt("What would you like to do?");
var todos = [];


while(userInput !== "quit") {

if (userInput ==="new") {
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    
} else if (userInput === "list") {
    console.log(todos);
   
} 
 userInput = prompt("What would you like to do?");
}

