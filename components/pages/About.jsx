import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import reviewBg from ".././/../public/assets/img/review-bg.jpg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

function About() {
	const services = [
		{
			id: 0,
			title: "Bread Fruit Cheese Sandwich",
			img: ".././/../public/assets/img/about/s1.jpg",
			description:
				"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
		},
		{
			id: 1,
			title: "Beef Cutlet with Spring Onion",
			img: ".././/../public/assets/img/about/s2.jpg",
			description:
				"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
		},
		{
			id: 2,
			title: "Meat with sauce & Vegetables",
			img: ".././/../public/assets/img/about/s3.jpg",
			description:
				"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
		},
	];

	return (
		<div>
			<AboutHeadline />
			<div className="text-black text-center px-6 pb-10 space-y-4">
				<h1 className="font-semibold text-4xl">
					What Kind of Services we Offer
				</h1>
				<p className="text-gray-400 text-base font-thin">
					Who are extremly love with eco friendly system.
				</p>
			</div>
			<div className="md:flex">
				{services.map((services, index) => (
					<div key={services.id} className="px-6 ">
						<div className="overflow-hidden">
							<Image
								className="hover:scale-125 transition-transform
									ease-in duration-150 cursor-pointer"
								src={services.img}
								alt={services.title}
								height="500"
								width="500"
							></Image>
						</div>
						<div className="font-bold text-lg my-4 text-slate-700">
							<h1>{services.title}</h1>
						</div>
						<div className="text-sm text-gray-500 font-light mb-4">
							<p>{services.description}</p>
						</div>
					</div>
				))}
			</div>
			<ProfileInfo />
		</div>
	);
}

export default About;

export function AboutHeadline() {
	return (
		<div>
			<div className="pt-32 pb-32 bg-white px-6 sm:px-8 md:px-10 md:flex gap-6 lg:px-20 lg:gap-8  ">
				<div className="md:w-1/2 max-md:max-w-xl ">
					<h1 className="text-black mb-6 font-bold text-4xl font-poppins">
						About Our Story
					</h1>
					<p className="text-gray-400 text-justify text-sm mb-6">
						Who are in extremely love with eco friendly system. Lorem ipsum
						dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.
					</p>
					<button className="px-8 py h-10 uppercase bg-[#f42f2c] text-white font-medium text-sm">
						VIEW FULL MENU
					</button>
				</div>
				<div className="max-md:mt-10 md:w-1/2">
					<Image
						className=""
						src="/../public/assets/img/about-img.jpg"
						width="500"
						height="500"
						alt="bacground hero"
					></Image>
				</div>
			</div>
		</div>
	);
}

export function ProfileInfo() {
	const info = [
		{
			id: 0,
			img: "/../public/assets/img/user.png",
			name: "Hulda Sutton",
			stars: 3,
			description:
				"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
		},
		{
			id: 1,
			img: "/../public/assets/img/blog/c1.jpg",
			name: "Jonhy Walker",
			stars: 5,
			description:
				"“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”",
		},
		{
			id: 2,
			img: "/../public/assets/img/blog/c2.jpg",
			name: "Axe Blake",
			stars: 1,
			description:
				"“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”",
		},
	];

	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);
	const number = [0, 1, 2];
	const delay = 2500;

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === number.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);
		return () => {
			resetTimeout();
		};
	}, [index]);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};
	const handleClick = (i) => {
		setIndex(i);
	};

	const slideInfo = info.filter((obj) => {
		if (index === 1) {
			return obj.id === 1;
		} else if (index === 2) {
			return obj.id === 2;
		} else if (index === 3) {
			return obj.id === 3;
		} else {
			return obj.id === 0;
		}
	});

	return (
		<>
			<div
				style={{ backgroundImage: `url(${reviewBg.src})` }}
				className="bg-cover bg-center py-28"
			>
				{slideInfo.map((data, i) => (
					<div key={data.id} className="text-center h-[200px]">
						<div className="flex justify-center mb-4">
							<Image
								className="mx-2 rounded-full"
								src={data.img}
								width="80"
								height="80"
								alt={data.name}
							></Image>
						</div>
						<h2 className="font-semibold text-lg">{data.name}</h2>
						<div className="flex justify-center">
							<i className="text-yellow-500">
								<AiFillStar />
							</i>
							<i className="text-yellow-500">
								<AiFillStar />
							</i>
							<i className="text-yellow-500">
								<AiFillStar />
							</i>
							<i className="text-yellow-500">
								<AiFillStar />
							</i>
							<i className="text-yellow-500">
								<AiOutlineStar />
							</i>
						</div>
						<div className="mt-6 max-w-[555px] ml-auto mr-auto text-center">
							<p className="italic text-gray-400 font-extralight">
								{data.description}
							</p>
						</div>
					</div>
				))}

				<div className="flex justify-center gap-2 mt-20">
					{info.map((data, i) => (
						<i
							key={data.id}
							onClick={() => {
								handleClick(i);
							}}
							className={
								index === i
									? "w-3 h-3 bg-red-500 cursor-pointer"
									: " w-3 h-3 bg-gray-500 cursor-pointer"
							}
						></i>
					))}
				</div>
			</div>
		</>
	);
}
