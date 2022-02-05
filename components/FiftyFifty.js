import ImgComp from "./ImgComp";

const FiftyFifty = ({ heading, content, imageSrc }) => {
	return (
		<div className="row c-fiftyFifty">
			<div className="col-sm-12 col-md-6 c-fiftyFifty__image">
				<ImgComp imageUrl={imageSrc} altText={`Ghost Recon ${heading} image`} imageClass={"img--responsive-width"}></ImgComp>
			</div>
			<div className="col-sm-12 col-md-6">
				<h3 className="heading--orange-border-bg">{heading}</h3>
				<p className="content--grey-border-bg">{content}</p>
				<button className="c-fiftyFifty__btn" aria-label={`Find out more about ${heading}`}>
					Find out more
				</button>
			</div>
		</div>
	);
};

export default FiftyFifty;
