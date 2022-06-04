/*
document.getElementsByClassName("drum")[0].addEventListener("click",handleClick);
document.getElementsByClassName("drum")[1].addEventListener("click",handleClick);
document.getElementsByClassName("drum")[2].addEventListener("click",handleClick);
document.getElementsByClassName("drum")[3].addEventListener("click",handleClick);
document.getElementsByClassName("drum")[4].addEventListener("click",handleClick);
document.getElementsByClassName("drum")[5].addEventListener("click",handleClick);
document.getElementsByClassName("drum")[6].addEventListener("click",handleClick);
document.getElementsByClassName("drum")[7].addEventListener("click",handleClick);


function handleClick(){
var audio=new Audio("sounds/tom-1.mp3");
audio.play();
}

*/
 var buttonsCount = document.querySelectorAll(".drum").length;
for (var i = 0; i<buttonsCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

//key board listener
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;    
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        default:console.log(buttonInnerHTML);
            break;
    }

}

function buttonAnimation(currentkey){
    var animationsVariable=document.querySelector("."+currentkey);
    animationsVariable.classList.add("pressed");
    setTimeout(function(){
        animationsVariable.classList.remove("pressed");
    },100);
}