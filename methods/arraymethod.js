
// 1 concat()

const arr1 = ["Nandu"]
const arr2 = ["Vinod"]
const name1 = arr1.concat(arr2)
console.log(name1)


// 2 every()

const ages =[25, 40, 35, 50]

function checkAge(age){
    return age>18;
}

console.log(ages.every(checkAge));  


//3 fill()

const fruit = ["Banana", "Orange", "Apple", ]
console.log(fruit.fill("grape"));

console.log(fruit.fill("Kiwi",2,3));

//4 find()

const age1= [5,15,12,25,30]

function findAge(age){
    return age>10
}

console.log(age1.find(findAge));

// 5 findIndex()

const age2=[5,10,19,25]

console.log(age2.findIndex((age)=>{return age>18}));

//6 flat()

const num1 = [[1,2],[3,4],[5,6]]

const newNum = num1.flat()
console.log(newNum);

//7 includes()

const fruit1=['apple','orange','mango','grape']
console.log(fruit1.includes('orange')); 

// 8 indexOf()

{
    const fruit=['apple','orange','mango','grape']
console.log(fruit.indexOf("mango"));
}

// 9 join()

{
    const fruit=['apple','orange','mango','grape']
console.log(fruit.join());
}

// 10 lastIndexOf()

{
    const fruit = ["Apple", "Orange", "Apple", "Mango"]
console.log(fruit.lastIndexOf("Apple"))
}

// 11 pop()

{
    const fruit = ["Apple", "Orange", "Apple", "Mango"]
console.log(fruit.pop());
}

// 11 push()

{const fruit =["apple","orange","mango"]
console.log(fruit.push("lemon"));
console.log(fruit);
}

// 13 reverese()

{
    const fruit= ['apple','orange','mango','grape']
    console.log(fruit.reverse()); 
}

//14 unshift()

{
    const fruit = ['apple','orange','mango']
    fruit.unshift('grape');
    console.log(fruit);
}

//15 shift()

{
    const fruit=['apple','orange','mango']
    fruit.shift()
    console.log(fruit);
}

//16 slice()

{
    const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
    const fruitSelected = fruit.slice(1,3)
    console.log(fruitSelected);
}

//17 some()

{
    const ages=[12,18,16,25,30]
    // const ages=[12,11,16,15,10]
    
    console.log(ages.some(checkAge))

    function checkAge(age){
        return age>18
    }
}

//18 every()
{
const ages =[25, 40, 35, 50]

function checkAge(age){
    return age>18;
}

console.log(ages.every(checkAge)); 
}

//19 sort()

{
    const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
    console.log(fruit.sort());
}

//20 splice()

{
    const fruit = ["Banana", "Orange", "Apple", "Mango"]
    fruit.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruit);
}

// 21 toString()

{
    const fruit = ['apple','orange','grape']
    console.log(fruit.toString()); 
}

//22 filter

{
    const ages=[15,20,40,35,12]
    console.log(ages.filter(checkAdult));

    function checkAdult(age){
        return age>18
    }
}

//23 reduce()

{
    const numbers=[100,50,25]
    console.log(numbers.reduce(numReduce));

    function numReduce(total,num){
        return total-num
    }
}

// 24 map()

{
    const numbers =[2,4,6,8]
    console.log(numbers.map(numMult));

    function numMult(num){
        return num*10
    }
}

//25 forEach

{
    let text="";
    const fruit=["apple","orange","mango"]
    fruit.forEach(printFruit)
    console.log(text);
    
    


    function printFruit(item,index){
        return text += index + ":" + item
    }
}