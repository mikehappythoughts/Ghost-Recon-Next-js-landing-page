import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Ghost Recon breakpoint</title>
				<meta name="description" content="This is a Ghost Recon protptype using Next js" />
				<link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@1,900&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
