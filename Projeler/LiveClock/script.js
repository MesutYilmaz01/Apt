setInterval(setClock,1000);
const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');
function setClock(){
	const currentDate = new Date();
	const secondRatio = currentDate.getSeconds()/60;
	const minuteRatio = (secondRatio+currentDate.getMinutes())/60;
	const hourRatio = (minuteRatio+currentDate.getHours())/12;
	setRotation(second,secondRatio);
	setRotation(minute,minuteRatio);
	setRotation(hour,hourRatio);
}
function setRotation(element,rotationRatio){
	element.style.setProperty('--rotation',rotationRatio*360)
}
setClock();