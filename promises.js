
// Let's suppose that the program below is an asynchronous program. 
// Then the program can be handled by using a promise.

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);   