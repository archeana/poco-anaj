// Set this constant to true to debug the placement of bombs without
// having to click on all cells to reveal them.
const CHEAT_REVEAL_ALL = false;

const BOMBS_COUNT = 45; //task2
const ROWS_COUNT = 15; //task3
const COLS_COUNT = 15;

var defeat = false;
var victory = false;

// Cell constructor - functiom
function Cell() {
  this.discovered = false;
  this.isBomb = false;
  this.hasBeenFlagged = false;
}

// Initialize cells - object
var cells = Array(ROWS_COUNT);
for (var row = 0; row < ROWS_COUNT; row++) {
  cells[row] = Array(COLS_COUNT);
  for (var col = 0; col < COLS_COUNT; col++) {
    cells[row][col] = new Cell();
  }
}

//
// // TODO: Task 1 - add some bombs at fixed positions.
// cells[0][1].isBomb = true;
// cells[5][4].isBomb = true;
// cells[12][11].isBomb = true;
// cells[3][8].isBomb = true;

//
// TODO: Task 2 - Comment out the code of task 1. Instead of adding bombs in fixed places, add 10 of them in random places.
//                Add a BOMBS_COUNT constant so that you can easily change the amount of bombs placed. Put it next to the
//                other constants.
//

// Randomly assign bombs Task 1

let bombsPlaced = 0;

while (bombsPlaced < BOMBS_COUNT) {
  // have to add the increment if not I will have an infinite  loop
  let randomRow = Math.floor(Math.random() * ROWS_COUNT);
  let randomCol = Math.floor(Math.random() * COLS_COUNT);
  console.log(randomCol);
  bombsPlaced++;

  cells[randomRow][randomCol].isBomb = true;
}
// Once the game has been initialized, we "render" it.
render();

//
// Game functions definitions
//
//
// TODO: Task 5 - Reveal cells when clicked.
function discoverCell(row, col) {
  if (!cells[row][col].discovered) {
    cells[row][col].discovered = true;

    // TODO: Task 6 - Discover neighbor cells recursively, as long as there are no adjacent bombs to the current cell.f the clicked cell has no adjacent bombs, recursively discover neighbor cells
    if (countAdjacentBombs(row, col) === 0) {
      // check the cells around 
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let newRow = row + i;
          let newCol = col + j;

          if (
            newRow >= 0 &&
            newRow < ROWS_COUNT &&
            newCol >= 0 &&
            newCol < COLS_COUNT
          ) {
            // keep the parameters in the same order
            discoverCell(newRow, newCol);
          }
        }
      }
    }
  }
  //after the first if when we discovered the cells.
  // TODO: Task 8 - Implement defeat. If the player "discovers" a bomb (clicks on it without holding shift), set the variable defeat to true.
  if (cells[row][col].isBomb) {
    defeat = true;
  }
}

//

function flagCell(row, col) {
  //
  // TODO: Task 7 - Implement flags. Flags allow the player to mark cells that they think contain a bomb.
  //                When clicking a cell and holding shift, function flagCell() will be called for you.
  //
  if (cells) {
    cells[row][col].hasBeenFlagged = !cells[row][col].hasBeenFlagged;
  }
}

// This function is called once for each cell when rendering the game. The row and col of the current cell is
// passed to the functionn
function countAdjacentBombs(row, col) {
  //
  // TODO: Task 4 - Adjacent bombs are bombs in cells touching our cell (also diagonally). Implement this function
  //                so that it returns the count of adjacent cells with bombs in them.
  //
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let newRow = row + i;
      let newCol = col + j;

      if (
        newRow >= 0 &&
        newRow < ROWS_COUNT &&
        newCol >= 0 &&
        newCol < COLS_COUNT
      ) {
        if (cells[newRow][newCol].isBomb) {
          count++;
        }
      }
    }
  }
  return count;
}

function getBombsCount() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.

  //shows the number connected to the bombs count
  return BOMBS_COUNT;
}

function getClearedCells() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  //
  let clearedCells = 0;
  for (let row = 0; row < ROWS_COUNT; row++) {
    for (let col = 0; col < COLS_COUNT; col++) {
      if (cells[row][col].discovered) {
        clearedCells++;
      }
    }
  }
  
  return clearedCells;
}

function getTotalCellsToClear() {
  //
  // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
  //
  let totalCellsToClear = ROWS_COUNT * COLS_COUNT;

  return totalCellsToClear;
}

function checkForVictory() {
  //
  // TODO: Task 10 - Implement victory. If the player has revealed as many cells as they must (every cell that isn't a
  //                 bomb), set variable victory to true.
  //
  return 0;
}

//
// Rendering functions
//
function getMessage() {
  if (victory == true) {
    return "Well done! 👏🏼<br><br>Refresh the page to start again.";
  } else if (defeat) {
    return "Boom! 💥<br><br>Refresh the page to try again.";
  }
  return "";
}

// "Render" the game. Update the content of the page to reflect any changes to the game state.
function render() {
  var playfield = document.getElementById("playfield");
  var html = "";
  for (var row = 0; row < ROWS_COUNT; row++) {
    html += '<div class="row">';
    for (var col = 0; col < COLS_COUNT; col++) {
      var cell = cells[row][col];
      var cellText = "";
      var cssClass = "";
      var textColor = "";
      if (cell.discovered || CHEAT_REVEAL_ALL || defeat) {
        cssClass = "discovered";
        if (cell.isBomb) {
          cellText = "💣";
        } else {
          var adjBombs = countAdjacentBombs(row, col);
          if (adjBombs > 0) {
            cellText = adjBombs.toString();
            if (adjBombs == 1) {
              textColor = "blue";
            } else if (adjBombs == 2) {
              textColor = "green";
            } else if (adjBombs == 3) {
              textColor = "red";
            } else if (adjBombs == 4) {
              textColor = "black";
            }
          }
        }
      } else {
        if (cell.hasBeenFlagged) {
          cellText = "🚩";
        }
      }
      html += `<div class="cell ${cssClass}" style="color:${textColor}" onclick="onCellClicked(${row}, ${col}, event)">${cellText}</div>`;
    }
    html += "</div>";
  }
  playfield.innerHTML = html;

  // Defeat screen
  var body = document.getElementsByTagName("body")[0];
  if (defeat) {
    body.classList.add("defeat");
  }

  // Victory screen
  if (victory) {
    body.classList.add("victory");
  }

  // Update stats
  document.getElementById("bombs-count").innerText = getBombsCount().toString();
  document.getElementById("cleared-cells-count").innerText =
    getClearedCells().toString();
  document.getElementById("total-cells-to-clear").innerText =
    getTotalCellsToClear().toString();

  // Update message
  document.getElementById("message").innerHTML = getMessage();
}

// This function gets called each time a cell is clicked. Arguments "row" and "col" will be set to the relevant
// values. Argument "event" is used to check if the shift key was held during the click.
function onCellClicked(row, col, event) {
  if (event.shiftKey) {
    flagCell(row, col);
  } else {
    discoverCell(row, col);
  }
  checkForVictory();
  render();
}
