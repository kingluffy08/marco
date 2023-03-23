import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import topBanner from ".././/../public/assets/img/top-banner.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

function Header({ title }) {
	const [onMobile, setOnMobile] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	const handleScroll = () => {
		scrollY > 130 ? setScrolled(true) : setScrolled(false);
	};
	const menuOnClick = () => {
		setOnMobile(!onMobile);
	};

	return (
		<nav
			className="z-50 text-white bg-cover bg-no-repeat bg-right-bottom"
			style={{ backgroundImage: `url(${topBanner.src})` }}
		>
			<div className="bg-black/40 px-6">
				<div className="flex justify-center py-6">
					<Image
						src="/assets/img/logo.png"
						width={80}
						height={80}
						alt="Logo"
						priority
					/>
				</div>
				<div
					className={
						scrolled
							? " py-4 fixed left-0 top-0 bg-black/60 w-full px-4 ease-in duration-100"
							: " border-y py-4 ease-in duration-100"
					}
				>
					<div className="flex items-center justify-between md:hidden">
						<div className={scrolled ? "hidden" : ""}>Menu</div>
						<div className={scrolled ? "" : "hidden"}>
							<Image
								src="/assets/img/logo.png"
								alt="logo of marco"
								width={40}
								height={40}
								priority
							/>
						</div>
						<div>
							<i
								className="text-xl"
								onClick={() => {
									menuOnClick();
								}}
							>
								<FaBars />
							</i>
						</div>
					</div>
					<div className="max-md:hidden">
						<ul className="text-white flex justify-center text-xs sm:space-x-4 md:space-x-6 lg:space-x-8 ">
							<Link href="/">
								<li className="hover:text-[#f42f2c]">HOME</li>
							</Link>
							<Link href="/About">
								<li className="hover:text-[#f42f2c]">ABOUT</li>
							</Link>
							<Link href="/Menu">
								<li className="hover:text-[#f42f2c]">MENU</li>
							</Link>
							<Link href="/Gallery">
								<li className="hover:text-[#f42f2c]">GALLERY</li>
							</Link>
							<Link href="/Contact">
								<li className="hover:text-[#f42f2c]">CONTACT</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className="py-20">
					<h1 className="font-bold text-4xl text-center pb-4">{title}</h1>
					<p className="text-center flex items-center justify-center space-x-4">
						Home
						<span>
							<AiOutlineArrowRight />
						</span>
						{title}
					</p>
				</div>

				<div
					className={
						onMobile ? "fixed bg-black/70 top-0 left-0 bottom-0 w-full" : ""
					}
				>
					<div
						className={
							onMobile
								? "fixed top-0 left-0 bottom-0 w-[70%] bg-black px-6 py-6 ease-in duration-300"
								: "fixed top-0 left-[-100%] bottom-0 w-[70%] bg-black ease-in duration-300"
						}
					>
						<i
							onClick={() => {
								menuOnClick();
							}}
							className="text-white flex justify-end items-center text-xl"
						>
							<IoCloseSharp />
						</i>
						<ul className="text-white">
							<Link href="/">
								<li className="mb-4">HOME</li>
							</Link>
							<Link href="/About">
								<li className="mb-4">ABOUT</li>
							</Link>
							<Link href="/Menu">
								<li className="mb-4">MENU</li>
							</Link>
							<Link href="/Gallery">
								<li className="mb-4">GALLERY</li>
							</Link>
							<Link href="/Contact">
								<li className="mb-4">CONTACT</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
