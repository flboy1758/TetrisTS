// Import stylesheets
import './style.css';

class TetrisBoard {
  private context: CanvasRenderingContext2D;
  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  draw(): void {
    context.lineCap = 'square';
    context.lineJoin = 'round';
    context.strokeStyle = 'white';
    context.lineWidth = 1;

    context.rect(10,10,280, 480);
    context.stroke();
  }
}

const canvas = <HTMLCanvasElement> document.getElementById("game-canvas");

const context = canvas.getContext("2d");


context.lineCap = 'round';
context.lineJoin = 'round';
context.strokeStyle = 'green';
context.lineWidth = 1;

context.fillStyle = 'green'

context.fillRect(10,10,280,1)
context.fill();

const tetrisBoard = new TetrisBoard(context);
tetrisBoard.draw();