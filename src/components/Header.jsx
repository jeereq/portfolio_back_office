import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<header>
			<ul>
				<NavLink to="/">update</NavLink>
				<NavLink to="/post">post</NavLink>
			</ul>
			<h1>CMS</h1>
		</header>
	);
};

export default Header;
