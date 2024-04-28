class Apple{
    constructor(
        x = Math.floor(Math.random() * grid.size.width),
        y = Math.floor(Math.random() * grid.size.height),
        color = '#ff3333'
    ){
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(){
        noStroke();
        fill(this.color);
        rect(width / grid.size.width * this.x, height / grid.size.height * this.y, width / grid.size.width, height / grid.size.height);
    }
}