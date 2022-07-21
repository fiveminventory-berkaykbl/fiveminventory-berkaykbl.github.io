var randomNumber = Math.floor(Math.random() * 3);

console.log($(".background"))

$(".background").style.backgroundImage = url('./images/background'+randomNumber+'.png')
