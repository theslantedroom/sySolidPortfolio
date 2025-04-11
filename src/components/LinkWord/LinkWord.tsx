const LinkWord = ({ text, url }) => {
	const style = {
		color: "#ffbf00",
		textDecoration: "none !important",
		cursor: "pointer",
	};
	return (
		<span
			style={style}
			onClick={() => window.open(url)}
			rel="noopener noreferrer"
		>
			{text}
		</span>
	);
};

export default LinkWord;
