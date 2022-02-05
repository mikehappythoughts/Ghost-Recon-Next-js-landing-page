import BigPicture from "bigpicture";
import ImgComp from "./ImgComp";

const VideoBlock = ({ heading, imageSrc, ariaLabel, ytId }) => {
	return (
		<div className="col-12 col-sm-6 c-videoBlock">
			<h3 className="heading--orange-border-bg c-videoBlock__heading">{heading}</h3>
			<a tabIndex="0" onClick={(e) => playVideo(e, ytId)} role="button" aria-label={`click to watch a video on ${ariaLabel}`} className="c-videoBlock__image-button">
				<ImgComp imageUrl={`/images/${imageSrc}`} altText={""} imageClass={"img--responsive-width c-videoBlock__image-button"}></ImgComp>

				<div className="c-videoBlock__yt-button">
					<svg aria-hidden="true" focusable="false" viewBox="0 0 99 71">
						<path d="M96.249 10.843c-1.131-4.268-4.462-7.63-8.691-8.77C79.892 0 49.15 0 49.15 0S18.41 0 10.744 2.073c-4.23 1.14-7.56 4.502-8.69 8.77C0 18.58 0 34.72 0 34.72s0 16.14 2.054 23.877c1.13 4.268 4.462 7.63 8.691 8.77 7.666 2.073 38.406 2.073 38.406 2.073s30.74 0 38.407-2.073c4.23-1.14 7.56-4.502 8.69-8.77 2.055-7.737 2.055-23.877 2.055-23.877s0-16.14-2.054-23.877"></path>
						<path fill="#FFFFFE" d="M39 50.859L65 36.36 39 21.859v29"></path>
					</svg>
				</div>
			</a>
		</div>
	);
};

const playVideo = (elm, ytid) => {
	BigPicture({
		el: elm.target,
		ytSrc: ytid,
	});
};

export default VideoBlock;
