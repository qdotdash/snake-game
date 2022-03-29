import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRender = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if(confirm("You Lost, Press ok to restart")){
        window.location = '/snake-game'
    }
    return
  }
  window.requestAnimationFrame(main);
  const timeBetweenRender = (currentTime - lastRender) / 1000;
  if (timeBetweenRender < 1 / SNAKE_SPEED) return;

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

window.requestAnimationFrame(main);
