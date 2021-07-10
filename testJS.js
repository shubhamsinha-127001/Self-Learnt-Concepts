const add = (a, b) => {
    console.log(a + b);
}

const sub = (a, b) => {
    console.log(a - b);
}

const mul = (a, b) => {
    console.log(a * b);
}

const b = (a, b, callback) => {
    console.log("Orignal function:::::");
    if (typeof callback === "function") {
        callback(a, b);
    }
    else {
        console.log("INVALID ARGUMENT BHAIYA!!!!!!!....." + callback);
    }
}

//inline callback with fat arrow noataion
//b(4, 5, (a,b) => {console.log (a+b)}); 
b(4, 5, 43)