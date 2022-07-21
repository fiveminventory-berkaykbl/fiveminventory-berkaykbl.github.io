var randomNumber = Math.floor(Math.random() * 3);

console.log($(".background"))

$(".background").style.backgroundImage = "url('./images/background'+randomNumber+'.png')"

var e = $(document).getElementsByClassName("background");

console.log(e)
console.log(e.style)
e.style.backgroundImage = "url('./images/background'+randomNumber+'.png')"