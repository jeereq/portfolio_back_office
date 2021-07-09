import useView from "../../use/useView";
const Details = ({ setEtat, Etat, dataWorks }) => {
	const [data] = useView(Etat, dataWorks);
	return (
		<>
			<div className="Portails Details">
				<div
					className="Croix"
					onClick={() => {
						setEtat((etat) => ({ ...etat, Details: false }));
					}}
				></div>
				<div className="view">
					<div className="image">
						<img src={data.src} alt={data.alt} />
					</div>
					<div className="details">
						<div className="block">
							<span>title_card </span>: {data.title_card}
						</div>
						<div className="block">
							<span>title </span>: {data.title}
						</div>
						<div className="block">
							<span>href </span>: {data.href}
						</div>
						<div className="block">
							<span>alt </span>: {data.alt}
						</div>
						<div className="block">
							<span>src </span>: {data.src}
						</div>
					</div>
					<div className="resume">
						<p>
							<span>resume : </span>
						</p>
						<p>{data.resume}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
