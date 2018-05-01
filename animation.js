let myAnimation = document.getElementById("animal2");
/*let myAnimation = document.querySelectorAll("#animal2, #animal3");*/
myAnimation.addEventListener("click", changeAnimationState);

myAnimation.style.WebkitAnimationPlayState ="paused";
myAnimation.style.AnimationPlayState ="paused";

function changeAnimationState(){
    if (myAnimation.style.WebkitAnimationPlayState =="paused" ||  
        myAnimation.style.AnimationPlayState =="paused"){
        myAnimation.style.WebkitAnimationPlayState ="running";
        myAnimation.style.AnimationPlayState ="running";
    } else {
        myAnimation.style.WebkitAnimationPlayState ="paused";
        myAnimation.style.AnimationPlayState ="paused";
    }
}