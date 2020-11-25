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

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

let snake = 0;

let dx = 20;
let dy = 0;

function init() {
    snake = [
        { x: 200, y: 400 },
        { x: 200 - gridSize, y: 400 },
        { x: 200 - gridSize * 2, y: 400 },
        { x: 200 - gridSize * 3, y: 400 },
        { x: 200 - gridSize * 4, y: 400 }
    ]
    
    dx = 20;
    dy = 0;
}
var gridSize = 20;
var updateTime = 100;


init();
main();

// main game loop that gets called with interval 'updateTime'
function main() {
    setTimeout(function onTick() {
        if (gameOver()) {
            waitForReset();
        }
        else {
            clearCanvas();
            move();
            draw();
            main();
        }
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

    if (keyPressed == KEY_LEFT || keyPressed == KEY_A && dx != 20) {
        dx = -20;
        dy = 0;
    }
    if (keyPressed == KEY_RIGHT || keyPressed == KEY_D && dx != -20) {
        dx = 20;
        dy = 0;
    }
    if (keyPressed == KEY_UP || keyPressed == KEY_W && dy != 20) {
        dx = 0;
        dy = -20;
    }
    if (keyPressed == KEY_DOWN || keyPressed == KEY_S && dy != -20) {
        dx = 0;
        dy = 20;
    }




};

function gameOver() {

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            console.log("AVSLUTA1");
            return true;
        }

    }
    if (snake[0].x < 0 || snake[0].x > board.width - gridSize || snake[0].y < 0 || snake[0].y > board.height - gridSize) {
        console.log("AVSLUTA2");
        return true;
    }

    return false;
}


// draw a border around the canvas
function clearCanvas() {
    board_ctx.fillStyle = board_background;
    board_ctx.strokestyle = board_border;
    board_ctx.fillRect(0, 0, board.width, board.height);
    board_ctx.strokeRect(0, 0, board.width, board.height);
}

function drawSnakePart(snakePart) {
    board_ctx.fillStyle = 'lightblue';
    board_ctx.strokestyle = 'darkblue';
    board_ctx.fillRect(snakePart.x, snakePart.y, gridSize, gridSize);
    board_ctx.strokeRect(snakePart.x, snakePart.y, gridSize, gridSize);
}


function draw() {
    snake.forEach(drawSnakePart);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function waitForReset() {
    await sleep(2000);
    init();
    main();
}