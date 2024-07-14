// Q1

function removeItem(){
    const selectItem = document.getElementById('colorSelect');
    const selectIndex = selectItem.selectedIndex
    selectItem.remove(selectIndex)
}

// Q2

function changeColor(){
    const selectItem = document.getElementById('colorSelect1');
    const selectcolor = selectItem.value;
    const textEle = document.getElementById('text')
    textEle.style.color = selectcolor
}

// Q3

function getFormValue(){
    const firstName = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    alert('First Name:' + firstName + '  Last Name:' + lastname);
}

// Q4

const images = [
    {
        url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    },
    {
        url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    },
    {
        url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }
];

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const imageElement = document.getElementById('randomImage');
    imageElement.src = randomImage.url;
    imageElement.width = randomImage.width;
    imageElement.height = randomImage.height;
    imageElement.style.display = "block";
}