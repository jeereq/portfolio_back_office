import useView from "../../use/useView";
import useUpdateForm from "../../use/useUpdateForm";

const UpdateItem = ({ setEtat, Etat, dataWorks, setDataWorks }) => {
	const [forms, setForms] = useView(Etat, dataWorks);

	const { change, submit } = useUpdateForm(
		setEtat,
		forms,
		Etat,
		setForms,
		dataWorks,
		setDataWorks
	);

	return (
		<>
			<div className="Portails">
				<div
					className="Croix"
					onClick={() => {
						setEtat((etat) => ({ ...etat, UpdateItem: false }));
					}}
				></div>
				<div className="form_update">
					<div className="image">
						<img src={forms["src"]} alt={forms["alt"]} />
					</div>
					<form onSubmit={submit}>
						<input
							type="text"
							placeholder="title"
							name="title_card"
							value={forms["title_card"]}
							onChange={(e) => {
								change(e);
							}}
						></input>
						<input
							type="text"
							placeholder="resume"
							name="resume"
							value={forms["resume"]}
							onChange={(e) => {
								change(e);
							}}
						></input>
						<input
							type="text"
							placeholder="href"
							name="href"
							value={forms["href"]}
							onChange={(e) => {
								change(e);
							}}
						></input>
						<input
							type="text"
							placeholder="title "
							name="title"
							value={forms["title"]}
							onChange={(e) => {
								change(e);
							}}
						></input>
						<input
							type="text"
							placeholder="src image"
							name="src"
							value={forms["src"]}
							onChange={(e) => {
								change(e);
							}}
						></input>
						<input
							type="text"
							placeholder="text alternatif"
							name="alt"
							value={forms["alt"]}
							onChange={(e) => {
								change(e);
							}}
						></input>
						<button type="submit">
							<div className="plus"></div>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
export default UpdateItem;
