import React, { useState } from "react";
import Image from "next/image";
import g1 from ".././/../public/assets/img/g1.jpg";
import g2 from ".././/../public/assets/img/g2.jpg";
import g3 from ".././/../public/assets/img/g3.jpg";
import g4 from ".././/../public/assets/img/g4.jpg";
import g5 from ".././/../public/assets/img/g5.jpg";
import g6 from ".././/../public/assets/img/g6.jpg";
export default function Gallery() {
	const [allGallery, setAllGallery] = useState(0);
	const menus = [
		{
			title: "Cappuccion",
			price: "$49",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "breakfast",
			img: g1,
			id: 0,
		},
		{
			title: "Mocha",
			price: "$39",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "breakfast",
			img: g2,
			id: 1,
		},
		{
			title: "Piccolo Latte",
			price: "$59",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "lunch",
			img: g3,
			id: 2,
		},
		{
			title: "Americano",
			price: "$27",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "dinner",
			img: g4,
			id: 3,
		},
		{
			title: "Macchiato",
			price: "$53",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "budget",
			img: g5,
			id: 4,
		},
		{
			title: "Ristretto",
			price: "$45",
			description:
				"Usage of the Internet is becoming more common due to rapid advance.",
			type: "buffet",
			img: g6,
			id: 5,
		},
	];
	const galleryFilter = menus.filter((obj) => {
		if (allGallery === 1) {
			return obj.type === "breakfast";
		} else if (allGallery === 2) {
			return obj.type === "lunch";
		} else if (allGallery === 3) {
			return obj.type === "dinner";
		} else if (allGallery === 4) {
			return obj.type === "budget";
		} else if (allGallery === 5) {
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
						Food and Customer Gallery
					</h1>
					<p className="text-center text-gray-600 text-sm py-6">
						Who are extremely love with eco friendly system
					</p>
				</div>
				<div className="bg-white rounded-xl md:flex mb-[50px] shadow-lg	shadow-gray-300	">
					<button
						onClick={() => {
							setAllGallery(0);
						}}
						className={
							allGallery === 0
								? "border-r w-full normal-case focus:text-white bg-red-500  text-white text-xs py-4 md:py-8 max-md:rounded-t-xl md:rounded-l-xl"
								: "border-r w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8 max-md:rounded-t-xl md:rounded-l-xl"
						}
					>
						All Menu
					</button>
					<button
						onClick={() => {
							setAllGallery(1);
						}}
						className="border-r  w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8"
					>
						Breakfast
					</button>
					<button
						onClick={() => {
							setAllGallery(2);
						}}
						className="border-r  w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8"
					>
						Lunch
					</button>
					<button
						onClick={() => {
							setAllGallery(3);
						}}
						className="border-r  w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8"
					>
						Dinner
					</button>
					<button
						onClick={() => {
							setAllGallery(4);
						}}
						className="border-r  w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8"
					>
						Budget Meal
					</button>
					<button
						onClick={() => {
							setAllGallery(5);
						}}
						className=" w-full normal-case focus:text-white focus:bg-red-500 bg-white text-black text-xs py-4 md:py-8 max-md:rounded-b-xl md:rounded-r-xl"
					>
						Buffet
					</button>
				</div>
				<div className="flex flex-wrap gap-4 justify-center">
					{galleryFilter.map((galleryFilter, index) => (
						<div key={galleryFilter.id}>
							<Image
								className="border-2 border-red-500 rounded-md"
								src={galleryFilter.img}
								height={50}
								width={300}
								alt={galleryFilter.title}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
