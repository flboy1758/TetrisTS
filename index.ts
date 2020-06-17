// Import stylesheets
import './style.css';

const canvas = <HTMLCanvasElement> document.getElementById("game-canvas");

const context = canvas.getContext("2d");

context.lineCap = 'round';
context.lineJoin = 'round';
context.strokeStyle = 'green';
context.lineWidth = 1;

context.fillStyle = 'green'

context.fillRect(10,10,280,100)
context.fill();