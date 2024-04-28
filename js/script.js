const grid = {};

let snake;
const apples = [];

let scoreOutput;
let score = 0;
let fps = 4;

function setup(){
    createCanvas(800, 800);
    background(80, 80, 80);
    frameRate(fps);

    grid.color = '#444';
    grid.weight = 2;
    grid.size = {
        width: 21,
        height: 21
    }

    grid.size.pixelX = width / grid.size.width;
    grid.size.pixelY = height / grid.size.height;

    snake = new Snake();

    apples.push(new Apple());
    apples.push(new Apple());

    scoreOutput = document.createElement('span');
    scoreOutput.id = 'score';
    scoreOutput.textContent = (score = 0);
    document.body.prepend(scoreOutput);
}

function draw(){
    background(80, 80, 80);
    drawGrid();
    
    apples.forEach(apple => apple.draw());
    snake.draw();

    const collidingApple = apples.find(apple => apple.x === snake.x && apple.y === snake.y);
    if(collidingApple){
        // Eating apple
        apples.splice(apples.indexOf(collidingApple), 1);
        snake.append();
        apples.push(new Apple());
        scoreOutput.textContent = ++score;
        fps += 1;
        frameRate(fps);
    }

    if(snake.body.slice(1).find(i => i.x === snake.x && i.y === snake.y)){
        snake.die();
        document.getElementById('game-over').classList.remove('hidden');
    }
}

function drawGrid(){
    stroke(grid.color);
    noFill();
    strokeWeight(grid.weight);
    for(let x = 0; x < grid.size.width; x += 1)
        for(let y = 0; y < grid.size.height; y += 1)
            rect( grid.size.pixelX * x, grid.size.pixelY * y, grid.size.pixelX, grid.size.pixelY);
}

function keyPressed(){
    if(key.startsWith('Arrow'))
        snake.direction = key.substring(5).toLowerCase();
}