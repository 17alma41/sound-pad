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

document.addEventListener("keydown", function(event){
    document.querySelector("#key").value = key;
    const audio = audioMap[key];
    if (audio){
        playAudio(audio);
        const  pad = Array.from(pads).find(pad => pad.innerHTML.toLowerCase() === key);
    }
})

let sample_aux
function sendSample(){
    var key = document.querySelector("#key").value;
    audioMap[key] = new Audio(sample)
    console.log("sample asignador al pad", key)
}

document.querySelector("#sample_file").addEventListener("change", function(event){
    sample = URL.createObjectURL(event.target.files[0]);
    sample_aux = new Audio(sample);
    sendSample();
})

function playAudio(audio){
    audio.pause();
    audio.currenTime = 0;
    audio.play();
}