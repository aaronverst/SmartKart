console.log("Hello!  This is your javascript file."); 


const route = ["Welcome to SmartKart!","Proceed to Bakery aisle 2 for Bread", "Proceed to Dairy aisle 2 for Eggs", "Proceed to aisle 6 for Steak", "Proceed to aisle 3 for Ice Cream", "You have completed your shopping list!"];

let counter = 0;

function Directions() { 
    if(counter < route.length){
        document.getElementById('texto').innerHTML = route[counter];
        counter += 1;
        Prompt();
    }
    else{
        document.getElementById('texto').innerHTML = "Thank you for shopping with us";
        counter = 0;
        Prompt();
    }        
}

function Prompt() { 
    if(counter == 0 || counter == 1){
        document.getElementById('prompt').innerHTML = "Press to Start";
    }
    else if (counter == route.length){
        document.getElementById('prompt').innerHTML = "Press to Close";
    }
    else{
        document.getElementById('prompt').innerHTML = "Scan Item";
    }        
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m  + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
Prompt();