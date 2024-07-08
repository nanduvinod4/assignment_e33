
// Q1

function factorial(){
    var num = parseFloat(document.getElementById('num').value)
    if(num<0){
        fac = "Input must be a non-negative integer"
    }
    else{
        var fac = 1;
        for(i=1;i<=num;i++){
            fac = fac * i;
        }
    }
    
    document.getElementById('facResult').innerText=fac;
}

// Q2

const doubleArray = function(numbers){
    return numbers.map(function(number) {
        return number * 2;
    });
}

const originalArray = [1, 2, 3, 4, 5];
const doubledArray = doubleArray(originalArray);
console.log(doubledArray);


// Q4


function processArray(numbers,double){
    return numbers.map(double);
}

const originalArray2 = [1, 2, 3, 4, 5];

const doubledArray2 = processArray(originalArray2, function(number) {
    return number * 2;
});

console.log(doubledArray2);