import { useState, useEffect } from "react";
const useView = (Etat, dataWorks) => {
	const [data, setData] = useState({
		href: "",
		resume: "",
		title_card: "",
		title: "",
		src: "",
		alt: "",
		id: ""
	});

	useEffect(() => {
		const exist = dataWorks.findIndex((Element) => Element.id === Etat.id);
		setData(dataWorks[exist]);
	}, [dataWorks, setData, Etat.id]);

	return [data, setData];
};

export default useView;
