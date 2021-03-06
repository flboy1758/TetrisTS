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

    context.rect(10,10,
      TetrisCell.cellSize * 10 + TetrisCell.cellOffset * (10 + 1),        TetrisCell.cellSize * 17 + TetrisCell.cellOffset * (17 + 1));
    context.stroke();
  }
}

class TetrisCell {
  private context: CanvasRenderingContext2D;
  private color: string;
  public position: {x: number, y: number};


  private static boardOffset = 12;
  public static cellSize = 26;
  public static cellOffset = 2;
  
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

    context.fillRect(
      TetrisCell.boardOffset + this.position.x * TetrisCell.cellSize + this.position.x * TetrisCell.cellOffset,
      TetrisCell.boardOffset + this.position. y * TetrisCell.cellSize + this.position.y * TetrisCell.cellOffset,
      TetrisCell.cellSize,
      TetrisCell.cellSize);
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
const colors = ['lightgreen', 'crimson', 'royalblue', 'gold'];

var tetrisCell = new TetrisCell(context, colors[0], 4, -2)


const gameloop = (tetrisCell: TetrisCell) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
    tetrisBoard.draw();
    tetrisCell.position.x +=0;
    tetrisCell.position.y +=1;
    tetrisCell.draw();
    setTimeout(() => gameloop(tetrisCell), 1000)
}

gameloop(tetrisCell);