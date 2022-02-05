import Link from "next/link";
import ImgComp from "./ImgComp";

const Header = () => {
	return (
		<header className="c-header">
			<div className="c-header__content container">
				<Link href="/#overview" scroll={false}>
					<a role="button" aria-label="Skip to content" className="c-header__skip-to-content">
						skip to content
					</a>
				</Link>
				<ImgComp imageUrl={"/images/logo.jpg"} altText={"Ghost Recon logo"} imageClass={"img--responsive-height"}></ImgComp>
			</div>
		</header>
	);
};

export default Header;
