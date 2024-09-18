console.log('this is separet js file')

function makeRed(){
    document.body.style.backgroundColor = 'red'
}

let makeBlueButton = document.getElementById('make-blue');
console.log(makeBlueButton)
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange'
})

function makeMeSkyBlue(){
    document.body.style.backgroundColor = 'skyblue'
}

 let btn =   document.getElementsByClassName('makeMeBlack')[0].addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
})
 let btn2 = document.getElementById('make-orange')
console.log({btn})
console.log({btn2})