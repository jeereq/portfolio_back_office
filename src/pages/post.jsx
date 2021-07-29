const Post = ({ dataWorks, setDataWorks }) => {
	const onSubmit = (e) => {
		e.preventDefault();

		let forms = e.target.elements;
		let works = {};

		Array.from(forms).forEach(({ name, value }) => {
			if (name !== "") works[name] = value;
		});

		works["id"] = dataWorks[dataWorks.length - 1].id + 1;
		setDataWorks([...dataWorks, works]);

		(async () => {
			await fetch(`http://${process.env.REACT_API_KEY_ID}/admin/works/post`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8"
				},
				body: JSON.stringify(works)
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					alert("send");
					e.target.reset();
				});
		})();
	};
	return (
		<>
			<div className="form_update post">
				<form onSubmit={onSubmit}>
					<input type="text" placeholder="title" name="title_card"></input>
					<input type="text" placeholder="resume" name="resume"></input>
					<input type="text" placeholder="href" name="href"></input>
					<input type="text" placeholder="title " name="title"></input>
					<input type="text" placeholder="src image" name="src"></input>
					<input type="text" placeholder="text alternatif" name="alt"></input>
					<button type="submit">
						<div className="plus"></div>
					</button>
				</form>
			</div>
		</>
	);
};

export default Post;
