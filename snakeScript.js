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

let dx = gridSize;
let dy = 0;

let appleX = 100;
let appleY = 200;
var gridSize = 40;
var updateTime = 100;

function init() {
    snake = [
        { x: 200, y: 400 },
        { x: 200 - gridSize, y: 400 },
        { x: 200 - gridSize * 2, y: 400 },
        { x: 200 - gridSize * 3, y: 400 },
        { x: 200 - gridSize * 4, y: 400 }
    ]


    spawnApple();
    dx = gridSize;
    dy = 0;
}

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

    updateTime = 150 - snake.length*2;
}
function move() {
    var head = { x: snake[0].x + dx, y: snake[0].y + dy };
    console.log(head.x + "   " + head.y);
    snake.unshift(head);
    if (head.x == appleX && head.y == appleY) {
        spawnApple();
    }
    else {
        snake.pop();
    }
}


//keypresses
function change_direction(event) {
    const keyPressed = event.keyCode;

    if (keyPressed == KEY_LEFT || keyPressed == KEY_A && dx != gridSize) {
        dx = -gridSize;
        dy = 0;
    }
    if (keyPressed == KEY_RIGHT || keyPressed == KEY_D && dx != -gridSize) {
        dx = gridSize;
        dy = 0;
    }
    if (keyPressed == KEY_UP || keyPressed == KEY_W && dy != gridSize) {
        dx = 0;
        dy = -gridSize;
    }
    if (keyPressed == KEY_DOWN || keyPressed == KEY_S && dy != -gridSize) {
        dx = 0;
        dy = gridSize;
    }




};

function gameOver() {

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            return true;
        }

    }
    if (snake[0].x < 0 || snake[0].x > board.width - gridSize || snake[0].y < 0 || snake[0].y > board.height - gridSize) {
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
function drawApple() {
    board_ctx.fillStyle = 'red';
    board_ctx.strokestyle = 'red';
    board_ctx.fillRect(appleX, appleY, gridSize, gridSize);
    board_ctx.strokeRect(appleX, appleY, gridSize, gridSize);
}


function draw() {

    snake.forEach(drawSnakePart);
    drawApple();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function spawnApple() {
    appleX = getRandomPos(0, board.width - gridSize);
    appleY = getRandomPos(0, board.height - gridSize);
}
function getRandomPos(min, max) {
    return Math.round((Math.random() * (max - min) + min) / gridSize) * gridSize;
}


async function waitForReset() {
    await sleep(2000);
    init();
    main();
}