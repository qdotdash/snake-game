import { onSnake, expandSnake } from "./snake.js";
import { getRandomGridPosition } from "./grid.js";

let foodPosition = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(foodPosition)) {
    expandSnake(EXPANSION_RATE);
    foodPosition = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.classList.add("food");
  foodElement.style.gridRowStart = foodPosition.y;
  foodElement.style.gridColumnStart = foodPosition.x;
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = getRandomGridPosition();
  }
  return newFoodPosition;
}
