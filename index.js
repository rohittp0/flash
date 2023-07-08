const FPS = 1000 / 30;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const  images = document.getElementsByTagName('img');

const drawFunctions = [];

ctx.fillStyle = 'white';
ctx.font = '50px sans-serif';

const centered = (text) => {
    const s = ctx.measureText(text).width;
    ctx.fillText(text, canvas.width / 2 - s / 2, 100);
}

for (let i = 0; i < images.length; i++) {
    drawFunctions.push(() => {
        // Draw text
        ctx.drawImage(images[i], 0, 0, width, height);
        centered('Screenshot');
    });
}

drawFunctions.forEach((draw, index) =>
    setTimeout(() =>
        setInterval(draw, FPS), index * FPS))

