import React from "react";
import Main from "@/components/pages/Contact";
import Footer from "@/components/pages/Footer";
import Header from "@/components/pages/Header";
import Head from "next/head";

function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<Header title={"Contact"} />
			<main>
				<Main />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Contact;
