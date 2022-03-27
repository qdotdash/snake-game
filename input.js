let inputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  console.log("press readed");
  switch (e.key) {
    case "ArrowUp":
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (inputDirection.y === -1) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (inputDirection.x === 1) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (inputDirection.x === -1) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection(snakeDirection) {
  if (snakeDirection.y === 1 && inputDirection.y === -1) return snakeDirection;
  else if (snakeDirection.y === -1 && inputDirection.y === 1)
    return snakeDirection;
  else if (snakeDirection.x === -1 && inputDirection.x === 1)
    return snakeDirection;
  else if (snakeDirection.x === 1 && inputDirection.x === -1)
    return snakeDirection;
  else return inputDirection;
}
