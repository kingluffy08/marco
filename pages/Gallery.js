import React from "react";
import Main from "@/components/pages/Gallery";
import Head from "next/head";
import Header from "@/components/pages/Header";
import Footer from "@/components/pages/Footer";

export default function Gallery({ title }) {
	return (
		<>
			<Head>
				<title>Gallery</title>
			</Head>
			<Header title={"Gallery"} />
			<main>
				<Main />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}
