import React from 'react'

const Board = () => {
	let board = new Array(8).fill(0).map(() => new Array(8).fill(0))
	board[1].fill('♟')
	board[6].fill('♙')
	board[0][0] = '♜'
	board[0][7] = '♜'
	board[0][1] = '♞'
	board[0][6] = '♞'
	board[0][2] = '♝'
	board[0][5] = '♝'
	board[0][4] = '♛'
	board[0][3] = '♚'
	
	board[7][0] = '♖'
	board[7][7] = '♖'
	board[7][1] = '♘'
	board[7][6] = '♘'
	board[7][2] = '♗'
	board[7][5] = '♗'
	board[7][4] = '♔'
	board[7][3] = '♕'
	return (
		<table border='1px solid black' style={{fontSize: '50px'}}>
			<tbody>
				{board.map((boardRank, i) => {
					return (
						<tr key={`r${i}`}>
							{
								boardRank.map((boardSquare, j) => (
									<td key={(i*8 + j)+1}>{boardSquare}</td>
								))
							}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default Board