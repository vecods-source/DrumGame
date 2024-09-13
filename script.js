for(let i = 0;i<document.querySelectorAll(".btn").length;i++)
{
    var bottom = document.querySelectorAll(".btn")[i]
    document.querySelectorAll(".btn")[i].style.backgroundImage = "url('images/" +(i +1 ) +".png')";
    bottom.addEventListener("click",function(event){
        var audio = new Audio("sounds/" + (i+1) + ".mp3");
        audio.play();
        const classList = event.target.className.split(" ");
        const targetClass = classList[1]; 
        aniamtebtn(targetClass); 
    });
        
}
function aniamtebtn(classname){
    document.querySelector("." + classname).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + classname).classList.remove("pressed");
    }, 300);
    
}

const soundMap = {
    'w': 'sounds/1.mp3',
    'a': 'sounds/2.mp3',
    's': 'sounds/3.mp3', 
    'd': 'sounds/4.mp3', 
    'j': 'sounds/5.mp3', 
    'k': 'sounds/6.mp3',
    'i': 'sounds/7.mp3'
};

document.addEventListener("keydown", function(event) {
    const soundFile = soundMap[event.key];
    aniamtebtn(event.key);
    if (soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    } else {
        console.log("No sound mapped for key:", event.key);
    }
});

