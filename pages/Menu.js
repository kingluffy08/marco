import React from "react";
import Main from "@/components/pages/Menu";
import Head from "next/head";
import Header from "@/components/pages/Header";
import Footer from "@/components/pages/Footer";

function Menu({ title }) {
	return (
		<>
			<Head>
				<title>Menu</title>
			</Head>
			<Header title="Menu" />
			<main>
				<Main />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Menu;
