import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
	//#region pieces assign
		let board = new Array(8).fill(0).map(() => new Array(8).fill(0))
		board[1].fill('pb')
		board[0][0] = 'Rb'
		board[0][7] = 'Rb'
		board[0][1] = 'Nb'
		board[0][6] = 'Nb'
		board[0][2] = 'Bb'
		board[0][5] = 'Bb'
		board[0][4] = 'Qb'
		board[0][3] = 'Kb'
		
		board[6].fill('pw')
		board[7][0] = 'Rw'
		board[7][7] = 'Rw'
		board[7][1] = 'Nw'
		board[7][6] = 'Nw'
		board[7][2] = 'Bw'
		board[7][5] = 'Bw'
		board[7][4] = 'Kw'
		board[7][3] = 'Qw'
	//#endregion

	const [currentPiece, setCurrentPiece] = useState('')

	const arrayToSquareName = (i, j) => {
		return String.fromCharCode(j+65).concat(8-i)
	}

	const onClick = (i, j) => {
		setCurrentPiece(arrayToSquareName(i, j))
	}

	return (
		<table border='1px solid black' style={{fontSize: '50px'}}>
			<tbody>
				{board.map((boardRank, i) => {
					return (
						<tr key={`r${i}`}>
							{boardRank.map((boardSquare, j) => (
								<td key={arrayToSquareName(i, j)}>
									<Square key={arrayToSquareName(i, j)} initPiece={board[i][j]} />
								</td>	
								))}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default Board