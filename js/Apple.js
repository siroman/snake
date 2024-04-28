export default class Apple {
  constructor(grid, x = Math.floor(Math.random() * grid.size.width), y = Math.floor(Math.random() * grid.size.height), color = '#ff3333') {
    this.grid = grid;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    noStroke();
    fill(this.color);
    rect((width / this.grid.size.width) * this.x, (height / this.grid.size.height) * this.y, width / this.grid.size.width, height / this.grid.size.height);
  }
}
