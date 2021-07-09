import { Switch, Route } from "react-router-dom";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Details from "./components/portails/Details";
import UpdateItem from "./components/portails/UpdateItem";
import Header from "./components/Header";
import Post from "./pages/post.jsx";
import Update from "./pages/update.jsx";

const App = () => {
	const [Etat, setEtat] = useState({
		Details: false,
		UpdateItem: false,
		id: null
	});

	const [dataWorks, setDataWorks] = useState([]);

	useEffect(() => {
		(async () => {
			const db = await fetch("http://localhost:4000/works");
			const dbJson = await db.json();
			setDataWorks(dbJson);
		})();
	}, []);

	const DeleteItem = (id) => {
		(async () => {
			await fetch("http://localhost:4000/admin/works/delete", {
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8"
				},
				body: JSON.stringify({ id: id })
			}).then((res) => {
				const removeData = dataWorks.filter((item) => +item.id !== +id);
				setDataWorks(removeData);
				return res.json();
			});
		})();
	};

	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route path="/post">
						<Post dataWorks={dataWorks} setDataWorks={setDataWorks} />
					</Route>
					<Route path="/">
						<Update
							setEtat={setEtat}
							Delete={DeleteItem}
							dataWorks={dataWorks}
						/>
					</Route>
				</Switch>
			</main>
			{Etat.Details &&
				createPortal(
					<Details setEtat={setEtat} Etat={Etat} dataWorks={dataWorks} />,
					document.body
				)}
			{Etat.UpdateItem &&
				createPortal(
					<UpdateItem
						setEtat={setEtat}
						Etat={Etat}
						dataWorks={dataWorks}
						setDataWorks={setDataWorks}
					/>,
					document.body
				)}
		</>
	);
};

export default App;
