# Chess AI

## Functional Requirements Part 1
1. Create a board with all pieces
2. Each piece can move and take each other pieces
3. Special moves like castling and en passant are part of this game
4. The player or AI is forced to move the king if under attack
5. The game is over when the player or the AI checkmates the king

## AI
| Piece  | Points |
|--------|--------|
| Pawn   | 1      |
| Knight | 3      |
| Bishop | 3      |
| Rook   | 5      |
| Queen  | 9      |
| King   | 1000   |

1. Use the minimax algorithm with alpha beta pruning with adjustable depth
