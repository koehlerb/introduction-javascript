let xs = [];
let ys = [];

function turnLeft() {}

function turnRight() {}

function setup() {
  createCanvas(720, 400);

  // yuck!
  xs[100] = 0;
  const indices = [...xs.keys()];
  for (const i in indices) {
    xs[i] = parseInt(i);
    ys[i] = 200;
  }
  // yuck!
}

function draw() {
  background(51);
  stroke('green');
  fill('red');

  for (const i in xs) {
    circle(xs[i], ys[i], 20);
  }
}
