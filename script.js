window.addEventListener("keydown",(e)=>{
	let keys=document.querySelector(`audio[dat-key="${e.keyCode}"]`);
	keys.play();
});

