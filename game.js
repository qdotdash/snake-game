import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRender = 0;
let gameOver = false;
let RENDER_SPEED = 5;
const gameBoard = document.getElementById("game-board");

document.getElementById("speed-up").onclick = function () {
  speedUp();
};
document.getElementById("speed-down").onclick = function () {
  speedDown();
};

function main(currentTime) {
  if (gameOver) {
    if (confirm("You Lost, Press ok to restart")) {
      location.replace("https://qdotdash.github.io/snake-game/");
    }
    return;
  }
  window.requestAnimationFrame(main);
  const timeBetweenRender = (currentTime - lastRender) / 1000;
  if (timeBetweenRender < 1 / RENDER_SPEED) return;
  console.log(RENDER_SPEED);

  lastRender = currentTime;
  console.log(timeBetweenRender);
  update();
  draw();
}

function update() {
  updateSnake();
  updateFood();
  gameOverCheck();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function gameOverCheck() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function speedUp() {
  if (RENDER_SPEED == 100) return;
  RENDER_SPEED += 1;
}

function speedDown() {
  if (RENDER_SPEED == 1) return;
  RENDER_SPEED -= 1;
}

window.requestAnimationFrame(main);
