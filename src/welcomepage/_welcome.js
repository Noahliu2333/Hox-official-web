let img;
const detail = 6;
let particles = [];
let grid = [];
let particleImage;
let ctx;
function preload() {
  img = loadImage(
    "data:image/jpeg;base64,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"
  );
}

class Particle {
  constructor(x, y) {
    this.x = x || random(width);
    this.y = y || random(height);
    this.prevX = this.x;
    this.speed = 0;
    this.v = random(0, 0.7);
  }

  update(speed) {
    if (grid.length) {
      this.speed = grid[floor(this.y / detail)][floor(this.x / detail)] * 0.97;
    }
    this.x += (1 - this.speed) * 3 + this.v;

    if (this.x > width) {
      this.x = 0;
    }
  }

  draw() {
    image(particleImage, this.x, this.y);
  }
}

/* ====== STEP 1 ====== */
function step1() {
  clear();
  noLoop();
  image(img, 0, 0, width, height);
  noFill();
  stroke(120);
  strokeWeight(1);
  strokeCap(SQUARE);
  ctx.globalAlpha = 1;
  for (let y = 0; y < height; y += detail) {
    for (let x = 0; x < width; x += detail) {
      rect(x + 0.5, y + 0.5, detail, detail);
    }
  }
}

/* ====== STEP 2 ====== */
function step2() {
  clear();
  ctx.globalAlpha = 1;
  noLoop();
  image(img, 0, 0, width, height);
  loadPixels();
  noStroke();
  for (let y = 0; y < height; y += detail) {
    for (let x = 0; x < width; x += detail) {
      const r = pixels[(y * width + x) * 4];
      const g = pixels[(y * width + x) * 4 + 1];
      const b = pixels[(y * width + x) * 4 + 2];
      const _color = color(r, g, b);
      const _brightness = floor((brightness(_color) / 100) * 255);
      fill(_brightness);
      rect(x, y, detail, detail);
    }
  }
}

/* ====== STEP 3 ====== */
function goToStep3() {
  ctx.globalAlpha = 1;
  loop();

  grid = [];
  particles = [];
  for (let i = 0; i < 20; i++) {
    particles.push(new Particle(null, (i / 20) * height));
  }
}

function step3() {
  clear();
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
}

/* ====== STEP 4 ====== */
function goToStep4() {
  clear();
  ctx.globalAlpha = 1;
  loop();
  image(img, 0, 0, width, height);
  loadPixels();
  clear();
  noStroke();

  grid = [];
  for (let y = 0; y < height; y += detail) {
    let row = [];
    for (let x = 0; x < width; x += detail) {
      const r = pixels[(y * width + x) * 4];
      const g = pixels[(y * width + x) * 4 + 1];
      const b = pixels[(y * width + x) * 4 + 2];
      const _color = color(r, g, b);
      const _brightness = brightness(_color) / 100;
      fill(_brightness * 255);
      rect(x, y, detail, detail);
      row.push(_brightness);
    }
    grid.push(row);
  }

  particles = [];
  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle(null, (i / 3000) * height));
  }
}

function step4() {
  clear();
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
}

/* ====== STEP 5 ====== */
function goToStep5() {
  clear();
  ctx.globalAlpha = 1;
  loop();
  image(img, 0, 0, width, height);
  loadPixels();
  clear();
  noStroke();

  grid = [];
  for (let y = 0; y < height; y += detail) {
    let row = [];
    for (let x = 0; x < width; x += detail) {
      const r = pixels[(y * width + x) * 4];
      const g = pixels[(y * width + x) * 4 + 1];
      const b = pixels[(y * width + x) * 4 + 2];
      const _color = color(r, g, b);
      const _brightness = brightness(_color) / 100;
      fill(_brightness * 255);
      rect(x, y, detail, detail);
      row.push(_brightness);
    }
    grid.push(row);
  }

  particles = [];
  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle(null, (i / 3000) * height));
  }
}

function step5() {
  clear();
  particles.forEach((p) => {
    p.update();
    ctx.globalAlpha = p.speed * 0.3;
    p.draw();
  });
}

/* ====== STEP 6 ====== */
function goToStep6() {
  clear();
  ctx.globalAlpha = 1;
  loop();
  image(img, 0, 0, width, height);
  loadPixels();
  clear();
  noStroke();

  grid = [];
  for (let y = 0; y < height; y += detail) {
    let row = [];
    for (let x = 0; x < width; x += detail) {
      const r = pixels[(y * width + x) * 4];
      const g = pixels[(y * width + x) * 4 + 1];
      const b = pixels[(y * width + x) * 4 + 2];
      const _color = color(r, g, b);
      const _brightness = brightness(_color) / 100;
      row.push(_brightness);
    }
    grid.push(row);
  }

  particles = [];
  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle(null, (i / 3000) * height));
  }
}

function step6() {
  ctx.globalAlpha = 0.05;
  fill(0);
  rect(0, 0, width, height);
  ctx.globalAlpha = 0.2;
  particles.forEach((p) => {
    p.update();
    ctx.globalAlpha = p.speed * 0.3;
    p.draw();
  });
}

function setup() {
  const canvas = createCanvas(100, 100);
  ctx = canvas.drawingContext;

  pixelDensity(1);

  particleImage = createGraphics(8, 8);
  particleImage.fill(255);
  particleImage.noStroke();
  particleImage.circle(4, 4, 4);

  windowResized();
  document.querySelector("#step").addEventListener("input", () => {
    if (window["goToStep" + step.value]) {
      window["goToStep" + step.value]();
    }
    draw();
  });
}

function windowResized() {
  const imgRatio = img.width / img.height;
  if (windowWidth / windowHeight > imgRatio) {
    resizeCanvas(floor(windowHeight * imgRatio), floor(windowHeight));
  } else {
    resizeCanvas(floor(windowWidth), floor(windowWidth / imgRatio));
  }
  noiseSeed(random(100));
  if (window["goToStep" + step.value]) {
    window["goToStep" + step.value]();
  }
  draw();
}

const texts = document.querySelectorAll("section p");
function draw() {
  window["step" + step.value]();

  texts.forEach((text) => (text.style.display = "none"));
  texts[step.value - 1].style.display = "block";
}

("data:image/jpeg;base64,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");
