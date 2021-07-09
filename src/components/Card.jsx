const Card = ({ id, src, alt, title_card, setEtat, Delete }) => {
	const updateCard = () => {
		setEtat((etat) => ({ ...etat, UpdateItem: true, id: id }));
	};
	const deleteCard = () => {
		Delete(id);
	};
	const showCard = () => {
		setEtat((etat) => ({ ...etat, Details: true, id: id }));
	};
	return (
		<>
			<div className=" Card">
				<div className="image">
					<img src={src} alt={alt} />
				</div>
				<div className="text">
					<div className="btn title">{title_card}</div>
					<div className="btn update" onClick={updateCard}>
						update
					</div>
					<div className="btn delete" onClick={deleteCard}>
						delete
					</div>
					<div className="btn show" onClick={showCard}>
						details
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
