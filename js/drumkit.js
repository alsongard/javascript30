window.addEventListener("keydown", function(event){
    // console.log(event.keyCode);
    // console.log(event);
    console.log(`Key clicked is ${event.key} and value is ${event.keyCode}`);
    //acquire audion
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.play();
    console.log(audio);
    if (!audio){
        console.log(`Wrong key pressed ${event.key}`)
    }
});