// iterate through tiles to create an 8x8 grid
// for i in range(8):
//  for j in range(8):
//    if j % 2 == i % 2:
//      createWhiteTile()
//    else:
//      createBlackTile()

let board = document.createElement('board')
board.className = 'board'


for (let i = 0; i < 8; i++) {
  let row = document.createElement('div')
  row.className = 'row'
  for (let j = 0; j < 8; j++) {
    if (j % 2 === i % 2) {
      let tile = document.createElement('div')
      tile.className = 'black-tile'
      row.appendChild(tile)
      // document.body.appendChild(tile)
    }
    else {
      let tile = document.createElement('div')
      tile.className = 'white-tile'
      row.appendChild(tile)
      // document.body.appendChild(tile)
    }
    board.appendChild(row)
  }
}
document.body.appendChild(board)