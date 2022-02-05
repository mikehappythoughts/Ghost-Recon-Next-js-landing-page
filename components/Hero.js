import ImgComp from "./ImgComp";

const Hero = () => {
	return (
		<section>
			<div className="c-hero container">
				<div className="c-hero__content">
					<h1 className="c-hero__heading">have you got what it takes?</h1>
					<ImgComp imageUrl={"/images/hero.jpg"} altText={"soldier looking down a rifle scope"} imageClass={"img--responsive"}></ImgComp>
				</div>
			</div>
		</section>
	);
};

export default Hero;
