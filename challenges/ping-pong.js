/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE

const findBall = function (table) {
  let i = 0;
  while (!table[i]) {
    i++;
  }
  return i;
}

const pingPong = function (table) {
  // first gather information on initial state of ball, table
  let size = table.length;
  let initialIndex = findBall(table), newIndex = null;
  let ball = table[initialIndex];  // this is a reference
  // now calculate next position of ball
  ball.steps = ball.steps + 1;
  let bounces = Math.floor(ball.steps / (size - 1));  // if even we're moving R
  let direction;  // positive is right, negative is left
  if (bounces % 2 === 0) direction = 1;
  else direction = -1;
  let distanceFromWall = ball.steps % (size - 1);
  if (direction > 0) {  // moving right, away from left wall
    newIndex = 0 + distanceFromWall;
  } else {  // moving left, away from right wall
    newIndex = (size - 1) - distanceFromWall;
  }
  // now move the ball
  table[initialIndex] = null;
  table[newIndex] = ball;
  console.log(`steps: ${ball.steps}, bounces: ${bounces}, direction: ${direction}, distance from wall: ${distanceFromWall}`);
  // return table state
  return table;
};

let table = [{steps: 0}, null, null, null];

pingPong(table);
pingPong(table);
console.log(table);
/*
 * This will print out movement in node
setInterval(function () {
  console.log(pingPong(table));
}, 1250)
 */
