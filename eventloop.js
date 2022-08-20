console.log("Start");

setTimeout(function cbt(){
    console.log("CB setTimeOut");
},5000);

fetch("https://www.netflix.com")
.then(function cbF(){
    console.log("CB netflix");
});
console.log("End");