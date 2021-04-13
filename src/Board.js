import React, { useState, useEffect, useReducer } from 'react'
import Square from './Square'

const Board = () => {
	const [board, setBoard] = useState(new Array(8).fill([]).map(() => new Array(8).fill(['', -1, 0])))
	const [clicked, setClicked] = useState([])
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
		boardTmp[0][0] = ['R', 0, 0]
		boardTmp[1][0] = ['N', 0, 0]
		boardTmp[2][0] = ['B', 0, 0]
		boardTmp[3][0] = ['Q', 0, 0]
		boardTmp[4][0] = ['K', 0, 0]
		boardTmp[5][0] = ['B', 0, 0]
		boardTmp[6][0] = ['N', 0, 0]
		boardTmp[7][0] = ['R', 0, 0]
		boardTmp.forEach((el, i) => boardTmp[i][1] = ['p', 0, 0]) 
		
		boardTmp[0][7] = ['R', 1, 0]
		boardTmp[1][7] = ['N', 1, 0]
		boardTmp[2][7] = ['B', 1, 0]
		boardTmp[3][7] = ['Q', 1, 0]
		boardTmp[4][7] = ['K', 1, 0]
		boardTmp[5][7] = ['B', 1, 0]
		boardTmp[6][7] = ['N', 1, 0]
		boardTmp[7][7] = ['R', 1, 0]
		boardTmp.forEach((el, i) => boardTmp[i][6] = ['p', 1, 0]) 
		setBoard(boardTmp)
		forceUpdate()
	}

	const pieceClicked = (x, y, piece, color, status) => {
		// if empty tile clicked
		if(!board[x][y][0]) return

		// switch between clicked and unclicked state
		clicked.length === 0 ? setClicked([x, y]) : setClicked([])
		
		const boardTmp = board
		boardTmp[x][y][2] = !!boardTmp[x][y][2] ? 0 : 2
		setBoard(boardTmp)

		// turn [0, 1] into [-1, 1] for easier calculation
		const pawnDirection = -(boardTmp[x][y][1]*2-1) 
		
		// show legal moves
		switch(board[x][y][0]) {
			case 'p': 
			  debugger
				const boardTmp = board
				boardTmp[x][y+1][2] = 2137
				setBoard(boardTmp)
				break;
			case 'R': break;
			case 'N': break;
			case 'B': break;
			case 'K': break;
			case 'Q': break;
			default: break;
		}
		

		// switch(board)
		
		// const colorStr = color === 0 ? 'white' : color === 1 ? 'black' : 'empty'
		// const statusStr = status ===  0 ? 'unselected' : status === 1 ? 'selected' : 'selectable' 
		// console.log('current piece is on a', x, y, 'position')
		// console.log('it\'s a', colorStr, piece, ', that\'s currently', statusStr)

	}

	const arrayToSquareName = (i, j) => {
		return String.fromCharCode(j+65).concat(8-i)
	}


	useEffect(() => {
		console.log('effect used')
	}, [board])

	return (
		<div style={{display: 'flex', flexDirection: 'row'}}>
			<table border='1px solid black' style={{fontSize: '50px'}}>
				<tbody>
					{board.map((boardRank, i) => {
						return (
							<tr key={`r${i}`}>
								{boardRank.map((boardSquare, j) => (
									<td key={arrayToSquareName(j, 7-i)} onClick={() => pieceClicked(j, 7-i, ...board[j][7-i])} style={{fontSize: '1rem'}}>
										<Square piece={board[j][7-i]} legalMove={board[j][7-i][2]} />
										{`[${j}, ${7-i}], ${board[j][7-i][0]}, ${board[j][7-i][1]}, ${board[j][7-i][2]}`} 
									</td>	
									))}
							</tr>
						)
					})}
				</tbody>
			</table>

			<div style={{display: 'flex', flexDirection: 'column'}}>
				<button onClick={boardInit}>start the game, shall we</button>
				clicked: {clicked}
			</div>
		</div>
	)
}

export default Board