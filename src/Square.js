import React from 'react'
import pieces from './pieces/_pieceImporter'

const currentPieceToNumber = (arr) => {
	let colorModifier = 0;
	if(arr[1] === 0) colorModifier += 6
	switch(arr[0]) {
		case 'p': return 1+colorModifier;
		case 'R': return 2+colorModifier;
		case 'N': return 3+colorModifier;
		case 'B': return 4+colorModifier;
		case 'K': return 5+colorModifier;
		case 'Q': return 6+colorModifier;
		default: return 0;
	}
}

const Square = (props) => {
	return (
		<div style={{position: 'relative'}}>
			<img alt="chess piece" src={pieces[currentPieceToNumber(props.piece.filter((el, i) => i <= 1))]} style={{posiiton: 'absolute'}} />
			{props.legalMove === 1 ? <img alt='legal move indicator' src={pieces[13]} style={{position: 'absolute', top: '0px', left: '0px'}} /> : ''}
		</div>
	)
}

export default Square