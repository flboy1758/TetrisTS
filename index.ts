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

class TetrisCell {
  private context: CanvasRenderingContext2D;
  private color: string;
  private position: {x: number, y: number};

  private static cellSize = 26;
  private static cellOffset = 2;
  
  constructor(context: CanvasRenderingContext2D,
              color: string,
              xPosition: number,
              yPosition: number = 0) {
    this.context = context;
    this.color = color;
    this.position = {x: xPosition, y: yPosition};
  }

  draw(): void {
    context.lineCap = 'square';
    context.lineJoin = 'round';
    context.fillStyle = this.color;
    context.lineWidth = 1;

    context.fillRect(12,12,26,26);
    //context.fill();
  }
}


const canvas = <HTMLCanvasElement> document.getElementById("game-canvas");

const context = canvas.getContext("2d");


context.lineCap = 'round';
context.lineJoin = 'round';
context.strokeStyle = 'green';
context.lineWidth = 1;

context.fillStyle = 'green'


const tetrisBoard = new TetrisBoard(context);
tetrisBoard.draw();

const tetrisCell = new TetrisCell(context, 'red',1,1);
tetrisCell.draw();