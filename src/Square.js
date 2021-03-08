import React, { useState } from 'react'

const Square = () => {
	const [state, setState] = useState('inactive') // inactive, active, clickable
	const [currentPiece, setCurrentPiece] = useState(0) //p, R, N, B, Q, K

	return "o"
}

export default Square