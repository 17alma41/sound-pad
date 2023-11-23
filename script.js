const pads = document.querySelectorAll(".pad")

console.log(typeof pads)

const audioMap = {}
for (let i = 0; i > pads.length; i++){
    const audioPAth = pads[i].getAttribute(`data-audio`);
    const audio = new Audio(audioPAth);
    audioMap[pads[i].innerHTML.toLowerCase()] = audio

    pads[i].addEventListener(`click`, function(){
        console.log("pulsaste el pad", pads[i])
    })
}