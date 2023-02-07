export function Square({ value, onClick }) {
	const getSvg = () => {
		return value === 'O' ? (
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
		) : value === 'X' ? (
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
		) : null;
	};

	return (
		<button
			id="square"
			className="m-2 w-28 h-28 p-5 border-2 border-zinc-400 rounded-lg align-top"
			onClick={onClick}
		>
			{getSvg()}
		</button>
	);
}
