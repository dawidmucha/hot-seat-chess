import React, { useState } from 'react'
import pieces from './pieces/_pieceImporter'

const currentPieceToNumber = (currentPiece) => {
	switch(currentPiece) {
		case 'pb': return 1;
		case 'Rb': return 2;
		case 'Nb': return 3;
		case 'Bb': return 4;
		case 'Kb': return 5;
		case 'Qb': return 6;
		
		case 'pw': return 7;
		case 'Rw': return 8;
		case 'Nw': return 9;
		case 'Bw': return 10;
		case 'Kw': return 11;
		case 'Qw': return 12;

		default: return 0;
	}
}

const Square = (props) => {
	const [state, setState] = useState('inactive') // inactive, active, clickable
	const [currentPiece, setCurrentPiece] = useState(0) //p, R, N, B, Q, K

	React.useEffect(() => {
		setCurrentPiece(props.initPiece)
	}, )

	return <img src={pieces[currentPieceToNumber(currentPiece)]} />
}

export default Square