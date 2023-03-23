import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import bgHero from ".//../public/assets/img/hero-bg.jpg";
const Navbar = () => {
	let hide = "hidden";
	const [Icon, setIcon] = useState(false);
	const [ShowMenu, SetShowMenu] = useState("hidden");

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	const handleScroll = () => {
		if (scrollY >= 130) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	const iconClick = () => {
		Icon ? setIcon(false) : setIcon(true);
		Icon ? SetShowMenu("hidden") : SetShowMenu("okay");
	};

	const closeMenu = () => {
		Icon ? SetShowMenu("hidden") : SetShowMenu("okay");
		Icon ? setIcon(false) : setIcon(true);
	};

	return (
		<nav
			style={{ backgroundImage: `url(${bgHero.src})` }}
			className="h-[767px] bg-cover bg-center text-white"
		>
			<div className="flex items-center justify-center py-6">
				<Image
					src="/assets/img/logo.png"
					alt="logo of marco"
					width="80"
					height="80"
					priority
				/>
			</div>
			<div
				className={
					scrolled
						? "py-4 fixed left-0 top-0 bg-black/60 w-full px-4 ease-in duration-100"
						: "border-y py-4 ease-in duration-100 mx-6"
				}
			>
				<div className="sm:hidden flex justify-between items-center h-full">
					<div className="text-white">
						<div className={scrolled ? "hidden" : ""}>Menu</div>
						<div className={scrolled ? "" : "hidden"}>
							<Image
								src="/../public/assets/img/logo.png"
								alt="logo of marco"
								width="40"
								height="40"
								priority
							/>
						</div>
					</div>
					<div className="text-white text-xl">
						<i
							onClick={() => {
								iconClick();
							}}
						>
							{Icon ? <IoCloseSharp /> : <FaBars />}
						</i>
					</div>
				</div>
				<div className="max-sm:hidden w-full">
					<ul className="text-white flex justify-center text-xs sm:space-x-4 md:space-x-6 lg:space-x-8">
						<Link href="/">
							<li className="hover:text-[#f42f2c] font-medium">HOME</li>
						</Link>
						<Link href="/About">
							<li className="hover:text-[#f42f2c] font-medium">ABOUT</li>
						</Link>
						<Link href="/Menu">
							<li className="hover:text-[#f42f2c] font-medium">MENU</li>
						</Link>
						<Link href="/Gallery">
							<li className="hover:text-[#f42f2c] font-medium">GALLERY</li>
						</Link>
						<Link href="/Contact">
							<li className="hover:text-[#f42f2c] font-medium">CONTACT</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className="px-4 mt-48  sm:mx-10 md:mt-20">
				<p className="font-light tracking-wide mb-6">WIDE OPTIONS OF CHOICE</p>
				<h1 className="mb-8 text-4xl lg:text-6xl font-extrabold">
					Delicious Recipes
				</h1>
				<p className="font-light mb-8">
					inappropriate behavior is often laughed off as “boys will be boys,”
					women face higher conduct standards especially in the workplace.
					That’s why it’s crucial that, as women.
				</p>
				<button className="hover:bg-[#f44e4b] active:bg-red-300 mb-6 px-8 py h-10 uppercase bg-[#f42f2c] text-white font-medium text-sm">
					CHECK OUR MENU
				</button>
			</div>
			<div
				className={
					Icon
						? "fixed left-0 top-0 w-full h-screen bg-black/70 " + ShowMenu
						: ""
				}
			>
				<div
					className={
						Icon
							? "bg-black w-3/4 top-0 left-0 pt-6 pl-4 bottom-0 fixed ease-in duration-500"
							: "fixed left-[-100%] top-0 pt-6 pl-4 bottom-0 ease-in duration-500"
					}
				>
					<i
						className="flex justify-end text-xl pr-4"
						onClick={() => {
							closeMenu();
						}}
					>
						<IoCloseSharp />
					</i>
					<ul>
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
		</nav>
	);
};

export default Navbar;
