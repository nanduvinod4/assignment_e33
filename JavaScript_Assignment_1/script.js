// Q1

function calculateSum( num1 ,num2){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2
    document.getElementById('sum').innerText="sum :" + sum;
}

// Q2

function calculateArea(){
    var length = parseFloat(document.getElementById('length').value);
    var breadth = parseFloat(document.getElementById('breadth').value);
    var area = length * breadth;
    document.getElementById('area').innerText="Area :" + area;
}

// Q3

function calculateEligibility(){
    var age = document.getElementById('age').value;
    if (age >= 18){
        document.getElementById('eligibility').innerText="you are Eligible"
    }
    else{
    document.getElementById('eligibility').innerText="you are Not Eligible"
    }
}

// Q4

function grade(){
    var mark = document.getElementById('mark').value;
    if(mark >= 60){
        document.getElementById('result').innerText="You are PASSED";
    }
    else{
        document.getElementById('result').innerText="You are FAILED";
    }
}

// Q5

function valueCheck(){
    var numBer= parseFloat(document.getElementById('numBer').value);
    if(numBer > 0){
        document.getElementById('pnz').innerText="Number is Positive";
    }
    else if( numBer < 0){
        document.getElementById('pnz').innerText="Number is Negative";
    }
    else{
        document.getElementById('pnz').innerText="Number is Zero";
    }
}

// Q6

function ageCat(){
    var age = document.getElementById('cat').value;
    if(age<=12){
        document.getElementById('ageCat').innerText="Child";
    }
    else if(age<=19){
        document.getElementById('ageCat').innerText="Teenager";
    }
    else if(age<=59){
        document.getElementById('ageCat').innerText="Adult";
    }
    else{
        document.getElementById('ageCat').innerText="Senior";       
    }
}

// Q7

let arr=[1,3,9,12,15,18,21]
for(i=0;i<arr.length;i++){
    value = arr[i];
    sqr = value * value;
    console.log("Square of ",value,":",sqr);
}

// Q8

let limit =15
sum=0
for(i=1;i<=limit;i++){
    if(!(i%2===0)){
        sum=sum+i;
        console.log(sum);
    }    
}
