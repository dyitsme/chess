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
      tile.className = 'white-tile'
      // add chess notation
      const c = String.fromCharCode(96+j+1)

      tile.id = `${c}${8-i}`
      row.appendChild(tile)
    }
    else {
      let tile = document.createElement('div')
      tile.className = 'black-tile'
      // add chess notation

      const c = String.fromCharCode(96+j+1)

      tile.id = `${c}${8-i}`
      row.appendChild(tile)
      // document.body.appendChild(tile)
    }
    board.appendChild(row)
  }
}
document.body.appendChild(board)

let $ = function (elementId) {
  return document.getElementById(elementId)
}

// create rooks
let br1 = document.createElement('div')
let br2 = document.createElement('div')
let wr1 = document.createElement('div')
let wr2 = document.createElement('div')
let bRookSprite1 = document.createElement('img')
let bRookSprite2 = document.createElement('img')
let wRookSprite1 = document.createElement('img')
let wRookSprite2 = document.createElement('img')
bRookSprite1.src = 'assets/blackrook.svg'
bRookSprite2.src = 'assets/blackrook.svg'
wRookSprite1.src = 'assets/whiterook.svg'
wRookSprite2.src = 'assets/whiterook.svg'

br1.appendChild(bRookSprite1)
br2.appendChild(bRookSprite2)
wr1.appendChild(wRookSprite1)
wr2.appendChild(wRookSprite2)

$('a8').appendChild(bRookSprite1)

$('b8').textContent = 'N'
$('c8').textContent = 'B'
$('d8').textContent = 'Q'
$('e8').textContent = 'K'
$('f8').textContent = 'B'
$('g8').textContent = 'N'
$('h8').appendChild(br2)

$('a7').textContent = 'p'
$('b7').textContent = 'p'
$('c7').textContent = 'p'
$('d7').textContent = 'p'
$('e7').textContent = 'p'
$('f7').textContent = 'p'
$('g7').textContent = 'p'
$('h7').textContent = 'p'

$('a2').textContent = 'p'
$('b2').textContent = 'p'
$('c2').textContent = 'p'
$('d2').textContent = 'p'
$('e2').textContent = 'p'
$('f2').textContent = 'p'
$('g2').textContent = 'p'
$('h2').textContent = 'p'

$('a1').appendChild(wr1)
$('b1').textContent = 'N'
$('c1').textContent = 'B'
$('d1').textContent = 'Q'
$('e1').textContent = 'K'
$('f1').textContent = 'B'
$('g1').textContent = 'N'
$('h1').appendChild(wr2)