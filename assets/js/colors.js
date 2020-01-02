var colors = {
    0: ['#A43175', '#CD3D41', '#682F8A', "#CC63A1"],
    1: ["#F3742C", '#285E9F', '#5ED226', "#FF9C64"],
    2: ["#99E413", '#F5E815', '#0EAA63', "#40BD84"],
    3: ["#1959A0", '#0EA56F', '#3423AA', "#467BB5"],
    4: ["#FB3621", '#C81172', '#F58615', "#D84894"],
    5: ["#E32D32", '#FD666A', '#A50C10', "#E5862D"]
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getColor(set){
    return colors[set][getRndInteger(0, colors[set].length)];
}
function getColorSet(){
    return getRndInteger(0, Object.keys(colors).length - 1);
}

function lineV(x,y,width,height){
    //var x = getRndInteger(200, width - 200);
    //var y = 0;
    var unit = [x, y];
    var count = 0;
    if(y == 0){
        while (x > 0 && x < width && y < height) {
            if (count % 2 == 0) {
                unit.push(x);
                y = getRndInteger(y + 200, y + 500);
                unit.push(y);
                count++;
            }
            else {
                var rand = getRndInteger(1, 3);
                if (rand == 1) {
                    x = getRndInteger(x + 200, x + 400);
                }
                else {
                    x = getRndInteger(x - 200, x - 400);
                }
                unit.push(x);
                unit.push(y);
                count++;
            }
        }
        return unit;
    }


    while (y > 0 && y < height && x < width) {
        if (count % 2 == 0) {
            x = getRndInteger(x + 400, x + 800);
            unit.push(x);
            unit.push(y);
            count++;
        }
        else {
            var rand = getRndInteger(1, 3);
            if (rand == 1) {
                y = getRndInteger(y + 100, y + 200);
            }
            else {
                y = getRndInteger(y - 100, y - 200);
            }
            unit.push(x);
            unit.push(y);
            count++;
        }
    }
    return unit;
}
//function useRed(){return "red";}

//console.log(getColor(getColorSet()));

/*
var x = 100;
var y = 0;
var moves = [x, y];
for (var i = 0; i < 3; i++) {
    if (i % 2 == 0) {
        moves.push(x);                          //Use x from before
        //x = getRndInteger(x - 200, x + 200);
        y = getRndInteger(y, y + 100);
        moves.push(y);                          //Use new y
    }
    else{
        x = getRndInteger(x - 200, x + 200);
        moves.push(x); 
        moves.push(y);   
        //y = getRndInteger(y, y + 100);
        
    }
}
var height = 1000;
var width = 1000;
var x = 250;
var y = 0;
var unit = [x, y];
var count = 0;
while(x < width && x > 0 && y < height){
    if (count % 2 == 0) {
        unit.push(x);                        
        y = getRndInteger(y + 200, y + 500);
        unit.push(y);
        count++;                          
    }
    else{
        var rand = getRndInteger(1,3);
        if(rand == 1){
            x = getRndInteger(x + 200, x + 800);
        }
        else{
            x = getRndInteger(x - 200, x - 800);
        }
        unit.push(x);
        unit.push(y);
        count++;  
    }
}
console.log(unit);
*/

 /*
var height = 1000;
var width = 1000;
var x = 250;
var arr = [x];
var count = 0;
function lineTop(x,width,arr){
    if(x >= width && x > 0){
        return;
    }
    else{
        
        x = getRndInteger(x + 200, x + 800);    
        arr.push(x);
        return x += lineTop(x,width,arr); 
    }
}
function factorial(n) {
    if(n == 0 || n == 1){
      return 1;
    } 
    else {
      return n * factorial(n - 1);
    }
  }
lineTop(x,width,arr);
console.log(arr);
var height = 1000;
var width = 1000;
var x = 250;
var y = 0;
var unit = [x, y];
var count = 0;
while(x < width && x > 0 && y < height){
    if (count % 2 == 0) {
        unit.push(x);                        
        y = getRndInteger(y + 200, y + 500);
        unit.push(y);
        count++;                          
    }
    else{
        var rand = getRndInteger(1,3);
        if(rand == 1){
            x = getRndInteger(x + 200, x + 800);
        }
        else{
            x = getRndInteger(x - 200, x - 800);
        }
        unit.push(x);
        unit.push(y);
        count++;  
    }
    
}
*/