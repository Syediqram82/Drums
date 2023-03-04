var numberOfButtons = document.getElementsByClassName("drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML)
        
    })
    
}   
document.addEventListener("keypress", function(eveent){
    makeSound(eveent.key)
})



function makeSound(buttonInnerHTML){
    switch (buttonInnerHTML) {
        case "w":
            var crash1 = new Audio('sounds/crash.mp3');
             crash1.play();
            break;
            case "a":
            var crash1 = new Audio('sounds/kick-bass.mp3');
             crash1.play();
            break;
            case "s":
            var crash1 = new Audio('sounds/snare.mp3');
             crash1.play();
            break;
            case "d":
            var crash1 = new Audio('sounds/tom-1.mp3');
             crash1.play();
            break;
            case "j":
            var crash1 = new Audio('sounds/tom-2.mp3');
             crash1.play();
            break;
            case "k":
            var crash1 = new Audio('sounds/tom-3.mp3');
             crash1.play();
            break;
            case "l":
            var crash1 = new Audio('sounds/tom-4.mp3');
             crash1.play();
            break;
    
        default:
            break;
    }
}
