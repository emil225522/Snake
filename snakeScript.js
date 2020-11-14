document.addEventListener("keydown", change_direction)

const board_border = 'black';
const board_background = "lightgray";
const snake_col = 'green';
const snake_border = 'black';
const board = document.getElementById("gameCanvas");
const board_ctx = gameCanvas.getContext("2d");


const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

var gridSize = 20;
var updateTime = 100;

let snake = [
    { x: 200, y: 200 },
    { x: 200 - gridSize, y: 200 },
    { x: 200 - gridSize * 2, y: 200 },
    { x: 200 - gridSize * 3, y: 200 },
    { x: 200 - gridSize * 4, y: 200 }
]

let dx = 20;
let dy = 0;
main();

// main game loop that gets called with interval 'updateTime'
function main() {
    setTimeout(function onTick() {
        clearCanvas();
        move();
        draw();
        main();
    }, updateTime)
    updateTime = snake.length * 5 + 50;
}
function move() {
    var head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();
}


//keypresses
function change_direction(event) {
    const keyPressed = event.keyCode;
    
    if (keyPressed == KEY_LEFT && dx != 20) {
        dx = -20;
        dy = 0;
    }
    if (keyPressed == KEY_RIGHT && dx != -20) {
        dx = 20;
        dy = 0;
    }
    if (keyPressed == KEY_UP && dy != 20) {
        dx = 0;
        dy = -20;
    }
    if (keyPressed == KEY_DOWN && dy != -20) {
        dx = 0;
        dy = 20;
    }




};


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