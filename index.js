
const counValue = document.querySelector("#counter");
// or wr can use ,
//const counValue = document.getElementById("counter");

function increment() {
    //get the value from ui
    let value = parseInt(counValue.innerText);
    // update the value
    value =value+1;
    //set the value on ui
    counValue.innerText =value;

};


function decrement(){
    //get the value from ui
    let value = parseInt(counValue.innerText);
    // update the value
    value =value-1;
    //set the value on ui
    counValue.innerText =value;

};

const arr =[1,2,3];
arr.length =0;
console.log(arr)