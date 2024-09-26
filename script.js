let btn=document.querySelectorAll(".btns");

window.addEventListener("keydown",(e)=>{
	let audio=document.querySelector(`audio[dat-key="${e.keyCode}"]`);
	let buttons=document.querySelector(`.btns[dat-key="${e.keyCode}"]`);
	
	if(!audio){return;}

	audio.currentTime=0;
	audio.play();
	buttons.classList.add("animateB");
});


function removeanim(evt){
	if(evt.propertyName!=="transform"){
		return;
	}
	this.classList.remove("animateB");
}

btn.forEach(buttons => buttons.addEventListener("transitionend",removeanim));