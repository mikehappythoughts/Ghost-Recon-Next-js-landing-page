const ImgComp = ({ imageUrl, altText, imageClass }) => {
	return (
		<picture>
			<source srcSet={`${imageUrl.slice(0, -4)}.webp`} type="image/webp" />
			<img loading="lazy" src={`${imageUrl}`} alt={altText} className={imageClass} />
		</picture>
	);
};
export default ImgComp;
