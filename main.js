let words = [];
for(let i = 0; i < 3; i++) {
let word = prompt("Enter the word");
words[i] = word;
}

let ul = document.createElement("ul");
for(let word of words) {
var li = document.createElement("li");
li.innerText = word;
ul.appendChild(li)
}

document.getElementById("section1").appendChild(ul);
let button = document.createElement("button");
button.innerHTML = "Start";
button.id = "button1";
document.getElementById("section1").appendChild(button);


//second array 
let wordSwapedArray = words.map(function(word){

    let wordsInArray = word.split("");
    let firstLetter = wordsInArray[0];
    wordsInArray[0] = wordsInArray[wordsInArray.length - 1];
    wordsInArray[word.length - 1] = firstLetter;
    return wordsInArray.join(""); });

ul = document.createElement("ul");
for(let word of wordSwapedArray) {
var li = document.createElement("li");
li.innerText = word;
ul.appendChild(li)
}

document.getElementById("section2").appendChild(ul);
button = document.createElement("button");
button.innerHTML = "Back";
button.id = "button2";
document.getElementById("section2").appendChild(button);



document.getElementById("button1").addEventListener("click" , function(){
document.getElementById("section1").style.display = "none";
document.getElementById("section2").style.display = "block";

});


document.getElementById("button2").addEventListener("click" , function(){
document.getElementById("section1").style.display = "block";
document.getElementById("section2").style.display = "none";
});