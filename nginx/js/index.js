import characterUrls from "./urlsClasses.js";

loadIntro();


function loadIntro(){
	let maindiv = document.getElementById('main');
let scroll_container = document.createElement('div');
scroll_container.className = 'scroll-container'; 
let text = document.createElement('div');
text.className = 'scroll-text';
text.id = 'scroll-text';
text.innerHTML = `The world is changing—and so are the skies, the seas, and the very air we breathe. In this interactive journey, you’ll face one of humanity’s greatest challenges: global warming, driven by the rising levels of greenhouse gases (GHG) in the atmosphere. The decisions you make will determine the fate of the planet. Will you guide humanity towards a sustainable future, or lead us deeper into environmental chaos?

From renewable energy policies to lifestyle choices, every action has consequences. The balance between economic development and environmental protection will be tested as you navigate critical moments in history, make decisions for communities, and influence global leaders. Your choices could mitigate the effects of climate change—or hasten its impact.

You are not just an observer, but an active participant in shaping the Earth’s future. Are you ready to take on the challenge? The world awaits your leadership. Choose wisely, because the planet’s survival is in your hands.`;
scroll_container.appendChild(text);
maindiv.appendChild(scroll_container);

text.addEventListener('animationend', () => {
	scroll_container.className = 'centered';
	scroll_container.innerHTML = `<img src="https://media.tenor.com/n0A3c_iyR8IAAAAM/explode-cute.gif" alt="Explosion GIF" id="michi">`;
	
	setTimeout(() => {
		scroll_container.innerHTML = `<canvas id="gameCanvas"></canvas>`;
		initializeGameCanvas();
	  }, 3000); 
});
}

function loadImageToCanvas(imageUrl, canvas,context){
	let img = new Image();
	img.src = imageUrl;
	console.log(img.src);
	img.onload = function() {
		context.drawImage(img, 0,0, canvas.width, canvas.height);
	};
}

function initializeGameCanvas() {
	let canvas = document.getElementById('gameCanvas');
	canvas.width = 1400;
	canvas.height = 1000;
	let context = canvas.getContext('2d');
	context.fillStyle = 'black';
	context.fillRect(0, 0, canvas.width, canvas.height);
	let characters = new characterUrls();
	console.log(characters.leader);
	loadImageToCanvas(characters.activist,canvas, context);	
}
