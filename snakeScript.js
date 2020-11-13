
const board_border = 'black';
const board_background = "lightgray";
const snake_col = 'green';
const snake_border = 'black';
const board = document.getElementById("gameCanvas");
const board_ctx = gameCanvas.getContext("2d");
var gridSize = 20;
var updateTime = 100;

let snake = [
    { x: 200, y: 200 },
    { x: 200 - gridSize, y: 200 },
    { x: 200 - gridSize*2, y: 200 },
    { x: 200 - gridSize*3, y: 200 },
    { x: 200 - gridSize*4, y: 200 }
]

let dx = 20;
let dy = 0;
main();

// main function called repeatedly to keep the game running
function main() {
    setTimeout(function onTick() {
        clearCanvas();
        move();
        draw();
        main();
    }, updateTime)
    updateTime = snake.length*5 + 50;
}
function move() {
    var head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();
}


// draw a border around the canvas
function clearCanvas() {
    //  Select the colour to fill the drawing
    board_ctx.fillStyle = board_background;
    //  Select the colour for the border of the canvas
    board_ctx.strokestyle = board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    board_ctx.fillRect(0, 0, board.width, board.height);
    // Draw a "border" around the entire canvas
    board_ctx.strokeRect(0, 0, board.width, board.height);
}

function drawSnakePart(snakePart) {
    board_ctx.fillStyle = 'lightblue';
    board_ctx.strokestyle = 'darkblue';
    board_ctx.fillRect(snakePart.x, snakePart.y, gridSize, gridSize);
    board_ctx.strokeRect(snakePart.x, snakePart.y, gridSize, gridSize);
}

/*Function that prints the parts*/
function draw() {
    snake.forEach(drawSnakePart);
}