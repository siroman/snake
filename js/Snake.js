export default class Snake {
  constructor(grid, x = Math.floor(grid.size.width / 2), y = Math.floor(grid.size.height / 2), color = '#fff') {
    this.grid = grid;
    this.x = x;
    this.y = y;
    this.color = color;
    this.direction = 'right';
    this.body = [
      /* quadratini dello snake */
    ];
    this.dead = false;
  }

  append() {
    // Aggiungi un quadratino con le coordinate dell'ultimo (tail)
    this.body.push({
      x: this.body[this.body.length - 1]?.x || this.x,
      y: this.body[this.body.length - 1]?.y || this.y,
    });
  }

  get pixelX() {
    return width / this.grid.size.width;
  }

  get pixelY() {
    return height / this.grid.size.height;
  }

  set x(value) {
    if (value < 0) value = this.grid.size.width - 1;
    else if (value >= this.grid.size.width) value = 0;
    this.__x = value;
  }

  set y(value) {
    if (value < 0) value = this.grid.size.height - 1;
    else if (value >= this.grid.size.height) value = 0;

    this.__y = value;
  }

  get x() {
    return this.__x;
  }

  get y() {
    return this.__y;
  }

  set direction(value) {
    const filter = [
      ['up', 'down'],
      ['right', 'left'],
    ];

    if (!filter.find((i) => i.includes(this.direction) && i.includes(value))) this.__direction = value;
  }

  get x() {
    return this.__x;
  }

  get y() {
    return this.__y;
  }

  get direction() {
    return this.__direction;
  }

  move() {
    this.body.forEach((i, index) => {
      i.x = this.body[index + 1]?.x ?? this.x;
      i.y = this.body[index + 1]?.y ?? this.y;
    });

    switch (this.direction) {
      case 'right':
        this.x += 1;
        break;
      case 'left':
        this.x -= 1;
        break;
      case 'up':
        this.y -= 1;
        break;
      case 'down':
        this.y += 1;
        break;
    }
  }

  die() {
    this.dead = true;
  }

  draw() {
    noStroke();
    fill(this.color);
    rect(this.pixelX * this.x, this.pixelY * this.y, this.pixelX, this.pixelY);

    this.body.forEach((i) => rect((width / this.grid.size.width) * i.x, (height / this.grid.size.height) * i.y, width / this.grid.size.width, height / this.grid.size.height));

    if (!this.dead) this.move();
  }
}
