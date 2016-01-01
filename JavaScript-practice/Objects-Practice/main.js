var movieDB = [
    
    {
        title: "Titanic",
        rating: 4.5,
        hasWatched: true
        
    },
    
    {
        title: "Transformers",
        rating: 2.5,
        hasWatched: true
        
    },
    
    {
        title: "Balls of Fury",
        rating: 0.5,
        hasWatched: false
        
    },
    
    {
        title: "Walk to Remember",
        rating: 5,
        hasWatched: true
        
    }
    
];


for(var i = 0; i < movieDB.length; i++) {
    
    if(movieDB[i].hasWatched) {
        
        console.log("You have watched " + movieDB[i].title + 
" - " + movieDB[i].rating + " stars");
    } else console.log("You have not watched " + movieDB[i].title + 
" - " + movieDB[i].rating + " stars");
    
    
}