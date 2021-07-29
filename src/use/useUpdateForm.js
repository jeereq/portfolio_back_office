const useUpdateForm = (
	setEtat,
	forms,
	Etat,
	setForms,
	dataWorks,
	setDataWorks
) => {
	const change = (e) => {
		for (let name in forms) {
			if (name === e.target.name)
				setForms((forms) => ({ ...forms, [name]: e.target.value }));
		}
	};

	const submit = (e) => {
		e.preventDefault();
		(async () => {
			await fetch(`${process.env.REACT_API_KEY_ID}/admin/works/update`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8"
				},
				body: JSON.stringify(forms)
			}).then((res) => {
				const data = dataWorks.map((item) =>
					item.id === Etat.id ? forms : item
				);
				setDataWorks(data);
				setEtat((etat) => {
					return { ...etat, UpdateItem: false };
				});
			});
		})();
	};
	return { change, submit };
};

export default useUpdateForm;
