// Callback function is a passed asa an argument inside of another function.


function greet(name, callback){
    console.log('Hi' + " "+ name);
    callback();
}
function callme(){
    console.log("I am callback function");
}
greet("Swati",callme);