import Header from "@/components/pages/Header";
import Main from "@/components/pages/About";
import React from "react";
import Head from "next/head";
import Footer from "@/components/pages/Footer";

function About({ title }) {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<Header title="About Us" />
			<main>
				<Main />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default About;
