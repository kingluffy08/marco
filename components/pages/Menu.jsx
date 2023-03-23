import Image from "next/image";
import React, { useState } from "react";
import { ProfileInfo } from "./About";

export default function Menu() {
	const [allMenu, setAllMenu] = useState(0);
	const menus = [
		{
			title: "Cappuccion",
			price: "$49",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "breakfast",
			id: 0,
		},
		{
			title: "Mocha",
			price: "$39",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "breakfast",
			id: 1,
		},
		{
			title: "Piccolo Latte",
			price: "$59",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "lunch",
			id: 2,
		},
		{
			title: "Americano",
			price: "$27",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "dinner",
			id: 3,
		},
		{
			title: "Macchiato",
			price: "$53",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "budget",
			id: 4,
		},
		{
			title: "Ristretto",
			price: "$45",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "buffet",
			id: 5,
		},
	];
	const menuFilter = menus.filter((obj) => {
		if (allMenu === 1) {
			return obj.type === "breakfast";
		} else if (allMenu === 2) {
			return obj.type === "lunch";
		} else if (allMenu === 3) {
			return obj.type === "dinner";
		} else if (allMenu === 4) {
			return obj.type === "budget";
		} else if (allMenu === 5) {
			return obj.type === "buffet";
		} else {
			return obj;
		}
	});

	return (
		<>
			<div className="bg-[#f9f9ff] px-6 py-32">
				<div>
					<h1 className="text-4xl font-semibold text-gray-900 text-center">
						What kind of Foods we serve for you
					</h1>
					<p className="text-center text-gray-600 text-sm py-6">
						Who are extremely love with eco friendly system
					</p>
				</div>
				<div className="bg-white rounded-xl md:flex mb-[50px] shadow-lg	shadow-gray-300	">
					<button
						onClick={() => {
							setAllMenu(0);
						}}
						className={
							allMenu === 0
								? "border-r w-full normal-case focus:text-white bg-red-500  text-white text-xs py-4 md:py-8 max-md:rounded-t-xl md:rounded-l-xl"
								: "border-r w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8 max-md:rounded-t-xl md:rounded-l-xl"
						}
					>
						All Menu
					</button>
					<button
						onClick={() => {
							setAllMenu(1);
						}}
						className="border-r  w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8"
					>
						Breakfast
					</button>
					<button
						onClick={() => {
							setAllMenu(2);
						}}
						className="border-r  w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8"
					>
						Lunch
					</button>
					<button
						onClick={() => {
							setAllMenu(3);
						}}
						className="border-r  w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8"
					>
						Dinner
					</button>
					<button
						onClick={() => {
							setAllMenu(4);
						}}
						className="border-r  w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8"
					>
						Budget Meal
					</button>
					<button
						onClick={() => {
							setAllMenu(5);
						}}
						className=" w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8 max-md:rounded-b-xl md:rounded-r-xl"
					>
						Buffet
					</button>
				</div>
				<div className="flex flex-wrap gap-4 justify-center ">
					{menuFilter.map((menuFilter, index) => (
						<div
							key={menuFilter.id}
							className="bg-white p-6 rounded-xl ease-in duration-200"
						>
							<div className="flex justify-between">
								<h1 className="font-bold text-lg text-gray-800">
									{menuFilter.title}
								</h1>
								<h1 className="text-[#f42f2c] font-bold text-lg">
									{menuFilter.price}
								</h1>
							</div>
							<div className="py-4">
								<p className="text-[#777]">{menuFilter.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="bg-[url('.//../public/assets/img/reservation-bg.jpg')] bg-cover bg-no-repeat bg-center">
				<div className="bg-black/70 px-6 py-20 md:flex md:justify-between gap-36 items-center">
					<div className="text-gray-200 basis-1/2">
						<h1 className="text-4xl font-bold">
							Reserve your seats to confirm if you come with your family
						</h1>
						<p className="py-8 text-justify font-light">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam. Quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea.
						</p>
					</div>
					<div className="bg-white px-10 py-20 basis-1/2">
						<input
							placeholder="Your Name"
							className="block border w-full mb-4 py-2 px-2"
							type="text"
						></input>
						<input
							placeholder="Your Email Address"
							className="block border w-full mb-4 py-2 px-2"
							type="email"
						></input>
						<input
							placeholder="Phone Number"
							className="block border w-full mb-4 py-2 px-2"
							type="number"
						></input>
						<input
							placeholder="Select Date"
							className="block border w-full mb-4 py-2 px-2"
							type="date"
						></input>
						<select className="block border w-full mb-4 py-2 px-2">
							<option defaultValue disabled>
								Select Event
							</option>
							<option>Event One</option>
							<option>Event Two</option>
							<option>Event Three</option>
							<option>Event Four</option>
						</select>
						<div className="flex justify-center">
							<button className="hover:bg-[#f44e4b] active:bg-red-300 mb-6 px-8 py h-10 bg-[#f42f2c] text-white font-semibold text-sm">
								Make Reservation
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
