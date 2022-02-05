import ImgComp from "./ImgComp";

const Footer = () => {
	return (
		<footer className="c-footer">
			<div className="container">
				<div className="c-footer__content ">
					<div className="c-footer__logoContainer">
						<ImgComp imageUrl={"/images/pegi-18.png"} altText={"pegi 18 logo"} imageClass={"img--responsive-width img--footer-max-width"}></ImgComp>
					</div>
					<div className="c-footer__logoContainer">
						<ImgComp imageUrl={"/images/ubisoft-logo.png"} altText={"Ubisoft logo"} imageClass={"img--responsive-width img--footer-max-width"}></ImgComp>
					</div>
					<div className="c-footer__logoContainer">
						<ImgComp imageUrl={"/images/uplay.png"} altText={"Uplay logo"} imageClass={"img--responsive-width img--footer-max-width"}></ImgComp>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
