import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const Layout = ({ children }) => {
	return (
		<div className="content">
			<Header />
			<Hero />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
