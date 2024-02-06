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

// create knights
let bn1 = document.createElement('div')
let bn2 = document.createElement('div')
let wn1 = document.createElement('div')
let wn2 = document.createElement('div')
let bNSprite1 = document.createElement('img')
let bNSprite2 = document.createElement('img')
let wNSprite1 = document.createElement('img')
let wNSprite2 = document.createElement('img')
bNSprite1.src = 'assets/blackknight.svg'
bNSprite2.src = 'assets/blackknight.svg'
wNSprite1.src = 'assets/whiteknight.svg'
wNSprite2.src = 'assets/whiteknight.svg'

bn1.appendChild(bNSprite1)
bn2.appendChild(bNSprite2)
wn1.appendChild(wNSprite1)
wn2.appendChild(wNSprite2)

// create bishops
let bb1 = document.createElement('div')
let bb2 = document.createElement('div')
let wb1 = document.createElement('div')
let wb2 = document.createElement('div')
let bBSprite1 = document.createElement('img')
let bBSprite2 = document.createElement('img')
let wBSprite1 = document.createElement('img')
let wBSprite2 = document.createElement('img')
bBSprite1.src = 'assets/blackbishop.svg'
bBSprite2.src = 'assets/blackbishop.svg'
wBSprite1.src = 'assets/whitebishop.svg'
wBSprite2.src = 'assets/whitebishop.svg'

bb1.appendChild(bBSprite1)
bb2.appendChild(bBSprite2)
wb1.appendChild(wBSprite1)
wb2.appendChild(wBSprite2)

// create queens and kings
let bq = document.createElement('div')
let bk = document.createElement('div')
let wq = document.createElement('div')
let wk = document.createElement('div')
let bQSprite = document.createElement('img')
let bKSprite = document.createElement('img')
let wQSprite = document.createElement('img')
let wKSprite = document.createElement('img')
bQSprite.src = 'assets/blackqueen.svg'
bKSprite.src = 'assets/blackking.svg'
wQSprite.src = 'assets/whitequeen.svg'
wKSprite.src = 'assets/whiteking.svg'

bq.appendChild(bQSprite)
bk.appendChild(bKSprite)
wq.appendChild(wQSprite)
wk.appendChild(wKSprite)


// create pawns
let bp1 = document.createElement('div')
let bp2 = document.createElement('div')
let bp3 = document.createElement('div')
let bp4 = document.createElement('div')
let bp5 = document.createElement('div')
let bp6 = document.createElement('div')
let bp7 = document.createElement('div')
let bp8 = document.createElement('div')

let wp1 = document.createElement('div')
let wp2 = document.createElement('div')
let wp3 = document.createElement('div')
let wp4 = document.createElement('div')
let wp5 = document.createElement('div')
let wp6 = document.createElement('div')
let wp7 = document.createElement('div')
let wp8 = document.createElement('div')

let bPSprite1 = document.createElement('img')
let bPSprite2 = document.createElement('img')
let bPSprite3 = document.createElement('img')
let bPSprite4 = document.createElement('img')
let bPSprite5 = document.createElement('img')
let bPSprite6 = document.createElement('img')
let bPSprite7 = document.createElement('img')
let bPSprite8 = document.createElement('img')

let wPSprite1 = document.createElement('img')
let wPSprite2 = document.createElement('img')
let wPSprite3 = document.createElement('img')
let wPSprite4 = document.createElement('img')
let wPSprite5 = document.createElement('img')
let wPSprite6 = document.createElement('img')
let wPSprite7 = document.createElement('img')
let wPSprite8 = document.createElement('img')

bPSprite1.src = 'assets/blackpawn.svg'
bPSprite2.src = 'assets/blackpawn.svg'
bPSprite3.src = 'assets/blackpawn.svg'
bPSprite4.src = 'assets/blackpawn.svg'
bPSprite5.src = 'assets/blackpawn.svg'
bPSprite6.src = 'assets/blackpawn.svg'
bPSprite7.src = 'assets/blackpawn.svg'
bPSprite8.src = 'assets/blackpawn.svg'

wPSprite1.src = 'assets/whitepawn.svg'
wPSprite2.src = 'assets/whitepawn.svg'
wPSprite3.src = 'assets/whitepawn.svg'
wPSprite4.src = 'assets/whitepawn.svg'
wPSprite5.src = 'assets/whitepawn.svg'
wPSprite6.src = 'assets/whitepawn.svg'
wPSprite7.src = 'assets/whitepawn.svg'
wPSprite8.src = 'assets/whitepawn.svg'

bp1.appendChild(bPSprite1)
bp2.appendChild(bPSprite2)
bp3.appendChild(bPSprite3)
bp4.appendChild(bPSprite4)
bp5.appendChild(bPSprite5)
bp6.appendChild(bPSprite6)
bp7.appendChild(bPSprite7)
bp8.appendChild(bPSprite8)

wp1.appendChild(wPSprite1)
wp2.appendChild(wPSprite2)
wp3.appendChild(wPSprite3)
wp4.appendChild(wPSprite4)
wp5.appendChild(wPSprite5)
wp6.appendChild(wPSprite6)
wp7.appendChild(wPSprite7)
wp8.appendChild(wPSprite8)


$('a8').appendChild(br1)
$('b8').appendChild(bn1)
$('c8').appendChild(bb1)
$('d8').appendChild(bq)
$('e8').appendChild(bk)
$('f8').appendChild(bb2)
$('g8').appendChild(bn2)
$('h8').appendChild(br2)

$('a7').appendChild(bp1)
$('b7').appendChild(bp2)
$('c7').appendChild(bp3)
$('d7').appendChild(bp4)
$('e7').appendChild(bp5)
$('f7').appendChild(bp6)
$('g7').appendChild(bp7)
$('h7').appendChild(bp8)

$('a2').appendChild(wp1)
$('b2').appendChild(wp2)
$('c2').appendChild(wp3)
$('d2').appendChild(wp4)
$('e2').appendChild(wp5)
$('f2').appendChild(wp6)
$('g2').appendChild(wp7)
$('h2').appendChild(wp8)

$('a1').appendChild(wr1)
$('b1').appendChild(wn1)
$('c1').appendChild(wb1)
$('d1').appendChild(wq)
$('e1').appendChild(wk)
$('f1').appendChild(wb2)
$('g1').appendChild(wn2)
$('h1').appendChild(wr2)