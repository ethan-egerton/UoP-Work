const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// Base
ctx.fillStyle = 'black';
ctx.fillRect(10, 275, 100, 15);

// Pole
ctx.fillRect(25, 15, 10, 260);

// Hang beam
ctx.fillRect(25, 15, 132, 10);

// Support beam


// Rope
ctx.fillRect(152, 15, 5, 40);

// Head
ctx.beginPath();
ctx.arc(154, 85, 30, 0, 2 * Math.PI);
ctx.stroke();

// Body
ctx.fillRect(153, 115, 2, 90)

// R Arm
ctx.beginPath();
ctx.moveTo(153,120);
ctx.lineTo(170,160);
ctx.stroke();

// L Arm
ctx.beginPath();
ctx.moveTo(155,120);
ctx.lineTo(136,160);
ctx.stroke();

// R Leg
ctx.beginPath();
ctx.moveTo(153,203);
ctx.lineTo(170,243);
ctx.stroke();

// L Leg
ctx.beginPath();
ctx.moveTo(155,203);
ctx.lineTo(136,243);
ctx.stroke();