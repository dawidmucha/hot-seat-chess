import React, { useState, useEffect, useReducer } from 'react'
import Square from './Square'

const Board = () => {
	const [board, setBoard] = useState(new Array(8).fill([]).map(() => new Array(8).fill(['', -1, 0])))
	const [, forceUpdate] = useReducer(x => x + 1, 0);
	
	const boardInit = () => {
		const boardTmp = board;
		/* 
			board[i][j] = [
				pieceName - single letter
				color - 0 is white, 1 is black. -1 is an empty field
				status - 0 is unselected, 1 is selected, 2 is selectable
			]
		*/
		boardTmp[1].fill(['p', 1, 0])
		boardTmp[0][0] = ['R', 1, 0]
		boardTmp[0][1] = ['N', 1, 0]
		boardTmp[0][2] = ['B', 1, 0]
		boardTmp[0][3] = ['Q', 1, 0]
		boardTmp[0][4] = ['K', 1, 0]
		boardTmp[0][5] = ['B', 1, 0]
		boardTmp[0][6] = ['N', 1, 0]
		boardTmp[0][7] = ['R', 1, 0]
		
		boardTmp[6].fill(['p', 0, 0])
		boardTmp[7][0] = ['R', 0, 0]
		boardTmp[7][1] = ['N', 0, 0]
		boardTmp[7][2] = ['B', 0, 0]
		boardTmp[7][3] = ['Q', 0, 0]
		boardTmp[7][4] = ['K', 0, 0]
		boardTmp[7][5] = ['B', 0, 0]
		boardTmp[7][6] = ['N', 0, 0]
		boardTmp[7][7] = ['R', 0, 0]
		setBoard(boardTmp)
		forceUpdate()
	}

	const pieceClicked = (y, x, piece, color, status) => {
		const colorStr = color === 0 ? 'white' : color === 1 ? 'black' : 'empty'
		const statusStr = status ===  0 ? 'unselected' : status === 1 ? 'selected' : 'selectable' 
		console.log('current piece is on a', x, y, 'position')
		console.log('it\'s a', colorStr, piece, ', that\'s currently', statusStr)

	}

	const arrayToSquareName = (i, j) => {
		return String.fromCharCode(j+65).concat(8-i)
	}


	useEffect(() => {
		console.log('effect used')
	}, [board])

	return (
		<table border='1px solid black' style={{fontSize: '50px'}}>
			<button onClick={boardInit}>start the game, shall we</button>
			<tbody>
				{board.map((boardRank, i) => {
					return (
						<tr key={`r${i}`}>
							{boardRank.map((boardSquare, j) => (
								<td key={arrayToSquareName(i, j)} onClick={() => pieceClicked(i, j, ...board[i][j])}>
									<Square piece={board[i][j]}  />  
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