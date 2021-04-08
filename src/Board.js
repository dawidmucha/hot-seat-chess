import React, { useState, useEffect, useReducer } from 'react'
import Square from './Square'

const Board = () => {
	//#region boardVar pieces assign 
		/* 
			board[i][j] = [
				pieceName - single letter
				color - 0 is white, 1 is black. -1 is an empty field
				status - 0 is unselected, 1 is selected, 2 is selectable
			]
		*/
		
		let boardVar = new Array(8).fill(0).map(() => new Array(8).fill(['', -1, 0]))
		boardVar[1].fill(['p', 1, 0])
		boardVar[0][0] = ['R', 1, 0]
		boardVar[0][1] = ['N', 1, 0]
		boardVar[0][2] = ['B', 1, 0]
		boardVar[0][3] = ['Q', 1, 0]
		boardVar[0][4] = ['K', 1, 0]
		boardVar[0][5] = ['B', 1, 0]
		boardVar[0][6] = ['N', 1, 0]
		boardVar[0][7] = ['R', 1, 0]
		
		boardVar[6].fill(['p', 0, 0])
		boardVar[7][0] = ['R', 0, 0]
		boardVar[7][1] = ['N', 0, 0]
		boardVar[7][2] = ['B', 0, 0]
		boardVar[7][3] = ['Q', 0, 0]
		boardVar[7][4] = ['K', 0, 0]
		boardVar[7][5] = ['B', 0, 0]
		boardVar[7][6] = ['N', 0, 0]
		boardVar[7][7] = ['R', 0, 0]
	//#endregion

	const [board, setBoard] = useState(new Array(8).fill([]).map(() => new Array(8).fill(['', -1, 0])))

	const arrayToSquareName = (i, j) => {
		return String.fromCharCode(j+65).concat(8-i)
	}

	const [, forceUpdate] = useReducer(x => x + 1, 0);

	useEffect(() => {
		console.log('effect used')
	}, [board])

	const bongcloud = () => {
		const boardTmp = board
		boardTmp[0][0] = ['K', 0, 0]
		setBoard(boardTmp)
		console.log('bongcloud innitiated')
		forceUpdate()
	}

	return (
		<table border='1px solid black' style={{fontSize: '50px'}}>
			<button onClick={bongcloud}>bongcloud time</button>
			<tbody>
				{boardVar.map((boardRank, i) => {
					return (
						<tr key={`r${i}`}>
							{boardRank.map((boardSquare, j) => (
								<td key={arrayToSquareName(i, j)}>
									<Square piece={board[i][j]} />  
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