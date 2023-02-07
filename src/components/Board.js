import { Square } from './Square';
import { useState } from 'react';

export function Board() {
	const patterns = [
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isX, setIsX] = useState(true);

	const winner = getWinner(squares);

	let status = winner ? `${winner}W` : isX ? 'X' : 'O';

	if (squares.every((square) => square !== null) && status[1] !== 'W') {
		setTimeout(() => {
			restartGame();
		}, 2000);
	}

	const handleClick = (index) => {
		if (winner || squares[index]) return;
		squares[index] = isX ? 'X' : 'O';
		setSquares(squares);
		setIsX(!isX);
	};

	function getWinner(squares) {
		for (let i = 0; i < patterns.length; i++) {
			const [p1, p2, p3] = patterns[i];

			if (
				squares[p1] &&
				squares[p1] === squares[p2] &&
				squares[p1] === squares[p3]
			) {
				return squares[p1];
			}
		}

		return null;
	}

	const restartGame = () => {
		setSquares(Array(9).fill(null));
	};

	const createSquare = (index) => {
		return (
			<Square
				value={squares[index] || '1'}
				onClick={() => handleClick(index)}
			/>
		);
	};

	const getStatusSvg = () => {
		return status[0] === 'O' ? (
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					className="circleSvg"
				>
					<circle cx="12" cy="12" r="7"></circle>
				</svg>
				<p>{status[1] === 'W' ? 'Won' : 'Turn'}</p>
			</div>
		) : (
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					className="crossSvg"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
				<p>{status[1] === 'W' ? 'Won' : 'Turn'}</p>
			</div>
		);
	};

	return (
		<div className="w-full h-full">
			<div className="text-center mb-5 border bg-opacity-50 bg-clip-padding border-zinc-400 text-white bg-zinc-800 shadow-lg rounded-lg text-3xl ">
				<div id="status" className="w-1/5 my-3 mx-auto">
					{getStatusSvg()}
				</div>
			</div>
			<div
				id="board"
				className="text-center p-5 border bg-opacity-50 bg-clip-padding border-zinc-400 text-white bg-zinc-800 shadow-lg rounded-lg text-3xl "
			>
				<div id="board-row-1" className="mx-auto">
					{createSquare(0)}
					{createSquare(1)}
					{createSquare(2)}
				</div>
				<div id="board-row-2" className="mx-auto">
					{createSquare(3)}
					{createSquare(4)}
					{createSquare(5)}
				</div>
				<div id="board-row-3" className="mx-auto">
					{createSquare(6)}
					{createSquare(7)}
					{createSquare(8)}
				</div>
			</div>
			<button
				onClick={restartGame}
				id="restart"
				className="text-center p-3 mt-5 border w-full bg-opacity-50 bg-clip-padding border-zinc-400 text-white bg-zinc-800 shadow-lg rounded-lg text-3xl "
			>
				Restart
			</button>
		</div>
	);
}
