window.onload = function(){
	const buttonLeft = document.querySelector('.left')
	const buttonRight = document.querySelector('.right')
	const buttonUp = document.querySelector('.up')
	const buttonDown = document.querySelector('.down')

	const myCircle = document.getElementById('circle')

	const redChange = document.querySelector('.red')
	const blueChange = document.querySelector('.blue')
	const greenChange = document.querySelector('.green')

	/////////////////////////// PANEL CONTROL

	buttonLeft.onclick = function(){
		const leftDirection = myCircle.offsetLeft
 		myCircle.style.left = leftDirection - 20
	}

	buttonRight.onclick = function(){
		const leftDirection = myCircle.offsetLeft
		myCircle.style.left = leftDirection + 20
	}

	buttonUp.onclick = function(){
		const topDirection = myCircle.offsetTop
		myCircle.style.top = topDirection - 20
	}

	buttonDown.onclick = function(){
		const topDirection = myCircle.offsetTop
		myCircle.style.top = topDirection + 20
	}

	/////////////////////////// TECLAS

	window.onkeydown = function(event){
		const leftDirection = myCircle.offsetLeft
		const topDirection = myCircle.offsetTop

		switch(event.key){
		case 'ArrowUp':
			myCircle.style.top = topDirection - 20
			break
		case 'ArrowDown':
			myCircle.style.top = topDirection + 20
			break
		case 'ArrowLeft':
			myCircle.style.left = leftDirection - 20	
			break
		case 'ArrowRight':
			myCircle.style.left = leftDirection + 20	
			break
		}
	}

	/////////////////////////// COLORES

	function getColor(){
		let background = window.getComputedStyle(myCircle).getPropertyValue("background-color")
		return background
	}

	redChange.onclick = function() {
		if(getColor() !== 'rgb(255, 0, 0)') {
			myCircle.style = "background-color: rgb(255, 0, 0)"
		}
	}

	greenChange.onclick = function() {
		if(getColor() !== 'rgb(0, 255, 0)') {
			myCircle.style = "background-color: rgb(0, 255, 0)"
		}
	}

	blueChange.onclick = function() {
		if(getColor() !== 'rgb(0, 0, 255)') {
			myCircle.style = "background-color: rgb(0, 0, 255)"
		}
	}


	///////////////////////
}

/*
function move(element, direction, distance=20) {
   var topOrLeft = (direction=="left" || direction=="right") ? "left" : "top";
   var frameDistance = 1;
   if (direction=="up" || direction=="left"){
      distance *= -1;
      frameDistance = -1;
   }
   var elStyle = window.getComputedStyle(element);
   var value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
   var destination = (Number(value) + distance) + "px";
   function moveAFrame() {
      if (elStyle.getPropertyValue(topOrLeft)==destination) {
        clearInterval(movingFrames);
      }
      else {
         elStyle = window.getComputedStyle(element);
         value = elStyle.getPropertyValue(topOrLeft).replace("px", "");
        element.style[topOrLeft] = (Number(value) + frameDistance) + "px";
      }
   }
   var movingFrames = setInterval(moveAFrame, 10);
}
*/