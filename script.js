const pads = document.querySelectorAll(".pad");

console.log(typeof pads);

const audioMap = {}
for (let i = 0; i < pads.length; i++){
    const audioPAth = pads[i].getAttribute(`data-audio`);
    const audio = new Audio(audioPAth);
    audioMap[pads[i].innerHTML.toLowerCase()] = audio;
    
    pads[i].addEventListener(`click`, function(){
        console.log("pulsaste el pad", pads[i].innerHTML);
        const key = pads[i].innerHTML.toLocaleLowerCase();
        //document.querySelector("#key").value = key;
        pads[i].style.background = "red";
        setTimeout(function(){
            pads[i].style.background = "lightgray"
            pads[i].style.boxshadow = "0px 5px 0px darkslateblue"
        },100)
        if (audio) {
            playAudio(audio)
        }
    })
}

function playAudio(audio){
    audio.pause();
    audio.currenTime = 0;
    audio.play()
}