var userInput = prompt("What would you like to do?");
var todos = [];


while (userInput !== "quit") {

    if (userInput === "new") {
        
        addTodo(); 

    } else if (userInput === "list") {
        
        listTodo(); 

    } else if (userInput === "delete") {
       
        deleteTodo(); 
    }


    userInput = prompt("What would you like to do?");
}

function addTodo() {

    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log(newTodo + " added to list");

}

function listTodo() {
    
    console.log("********")
    todos.forEach(function (todoElement, index) {

        console.log(index + ":" +
            todoElement);

    });
    console.log("********")

}

function deleteTodo() {
    
   var indexToDelete = prompt("Enter index of todo to delete");
        todos.splice(indexToDelete, 1);
        console.log("Item at index " + indexToDelete + " was deleted");
    
    
}