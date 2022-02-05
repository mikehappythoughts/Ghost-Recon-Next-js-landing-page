import FiftyFifty from "../components/FiftyFifty";
import VideoBlock from "../components/VideoBlock";
import { useEffect } from "react";
import webInfo from "../data/data.json";

export default function Home() {
	useEffect(() => {
		document.body.addEventListener("keydown", handleFirstTab);
	}, []);

	const handleFirstTab = (e) => {
		console.log("active");
		if (e.keyCode === 9) {
			// "I am a keyboard user" key
			document.body.classList.add("user-is-tabbing");
			document.body.removeEventListener("keydown", handleFirstTab);
		}
	};

	return (
		<main>
			<section>
				<div id="overview" className="container">
					<h2 className="heading--orange-border-bg">overview</h2>
					<p className="content--black-bg">Tom Clancy's Ghost Recon Breakpoint is a military open world shooter. You can play in co-op or solo if you prefer. In Ghost Recon Breakpoint you face off against ex-ghosts, but the environment is your enemy as well. Your mission is to defeat your ex-ghosts and be the only man / woman standing.</p>
				</div>
			</section>

			{/* fifity fifty components */}
			<section>
				<div className="container">
					{webInfo.gameInfo.map((article, idx) => (
						<FiftyFifty key={idx} {...article} />
					))}
				</div>
			</section>
			<section>
				<div className="container heading--pad-bottom">
					<h2 className="heading--orange-border-bg">videos</h2>
				</div>
			</section>
			{/* video block components */}
			<section>
				<div className="container">
					<div className="row">
						{webInfo.gameVideos.map((videos, idx) => (
							<VideoBlock key={idx} {...videos} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
