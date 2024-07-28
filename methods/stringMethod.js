// 1 concat()
{
    const fname = "nandu"
    const lname = "vinod"
    console.log(fname.concat(lname));
}

// 2 includes()

{
    let text = "hello good morning"
    console.log(text.includes('good'));
}

//3 indexOf

{
    let text = "hello good morning"
    console.log(text.indexOf('good'));
}

//4 lastIndexOf

{
    let text = "Hello planet earth, you are a great planet"
    console.log(text.lastIndexOf('planet'));
}

//5 padEnd()

{
    let text="5"
    console.log(text.padEnd(4,"x"));
}

//6 padStart()

{
    let text ="5"
    console.log(text.padStart(4,'x'));
}

//7 repeat()

{
    let text = "hello world"
    let newText = text.repeat(2)
    console.log(newText);
}

//8 replace()

{
    let text = "hello good morning"
    console.log(text.replace('morning','afternoon'));
}

//9 search()

{
    let text ="hello my name is nandu"
    console.log(text.search('my'));
}

//10 slice()

{
    let text = "hello world"
    console.log(text.slice(0,5));
}

//11 split()

{
    let text = 'hello world'
    let newText= text.split(" ")
    console.log(newText);
}

//12 startsWith()

{
    let text = 'hello world'
    console.log(text.startsWith('hello'));
}

//13 substr()

{
    let text = 'hello world'
    console.log(text.substr(0,5));
}

//14 substring()

{
    let text = 'hello world'
    console.log(text.substring(0,5));
}

//15 toLowerCase()

{
    let text = 'HELLO WORLD'
    console.log(text.toLowerCase());
}

//16 toUpperCase()

{
    let text = 'hello world'
    console.log(text.toUpperCase());
}

//17 trim()

{
    let text = "   hello world   "
    console.log(text.trim());
}

//18 trimEnd()

{
    let text = "   hello world    "
    console.log(text.trimEnd());
}

//19 trimStart()

{
    let text = "   hello world    "
    console.log(text.trimStart());
}

//20 charAt()

{
    let text = 'hello world'
    console.log(text.charAt(0));
}

//21 charCodeAt()

{
    let text = 'hello world'
    console.log(text.charCodeAt(0));
}