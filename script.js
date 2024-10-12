var arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

var countOfStr = 0
var countOfNum = 0
var countOfBool = 0
var countOfObj = 0

let flatArray = arr.flat(Infinity);

for(i=0; i<(flatArray.length*2);i++){
    if(typeof(arr[i]) === "object"){
        countOfObj++    
        arr.push(...arr[i]);
    }
}

for(i=0; i<flatArray.length; i++){    
    if(typeof(flatArray[i]) === "string"){
        countOfStr++
    }
    else if(typeof(flatArray[i]) === "number"){
        countOfNum++
    } 
    else if(typeof(flatArray[i]) === "boolean"){
        countOfBool++
    }
}

console.log("Total number of strings =", countOfStr,"\n","Total number of Numbers =", countOfNum, "\n","Total number of Booleans =", countOfBool, "\n","Total number of Nested Arrays =", countOfObj)
alert(`In the given Array; \n \n Total number of Strings are ${countOfStr} \n Total number of Numbers are ${countOfNum} \n Total number of Booleans are ${countOfBool} \n Total number of Nested Arrays are ${countOfObj}`)