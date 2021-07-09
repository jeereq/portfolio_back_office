import AddCard from "../components/AddCard";
import Card from "../components/Card";
const Update = ({ setEtat, dataWorks, Delete }) => {
	return (
		<>
			<div id="Update">
				<AddCard />
				{dataWorks.map(({ id, src, alt, title_card }) => (
					<Card
						key={id}
						id={id}
						src={src}
						alt={alt}
						title_card={title_card}
						setEtat={setEtat}
						Delete={Delete}
					/>
				))}
			</div>
		</>
	);
};

export default Update;
