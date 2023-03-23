import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
	return (
		<div>
			<div className="bg-[#f42f2c] py-28 px-6 text-white flex flex-wrap  gap-10 ">
				<div className="mb-10 flex-[1_1_240px]">
					<h1 className="text-lg font-semibold">Opening Hours</h1>
					<div className="font-light border-solid border-b border-slate-300 flex justify-between py-6">
						<p className="text-sm">Moday - Friday</p>
						<p className="text-sm">08:00 am-10:00 pm</p>
					</div>
					<div className="font-light border-solid border-b border-slate-300 flex justify-between py-6">
						<p className="text-sm">Saturday</p>
						<p className="text-sm">08:00 am-10:00 pm</p>
					</div>
					<div className="font-light border-solid border-b border-slate-300 flex justify-between py-6">
						<p className="text-sm">Sunday</p>
						<p className="text-sm">08:00 am-10:00 pm</p>
					</div>
				</div>
				<div className="mb-10 flex-[1_1_240px] ">
					<h1 className=" text-lg font-semibold">Contact Us</h1>
					<p className="pt-7 font-light text-sm mb-6">
						56/8, los angeles, rochy beach, Santa monica, United states of
						america-1205
					</p>
					<h1 className="font-bold text-2xl">012-6532-568-9746</h1>
					<h1 className="font-bold text-2xl">012-6532-569-9748</h1>
				</div>
				<div className="mb-10 flex-[1_1_240px] max-w-[340px]">
					<h1 className=" text-lg font-semibold">News Letter</h1>
					<p className="py-7 text-sm font-light">
						You can trust us. we only send promo offers, not a single spam.
					</p>
					<div className="relative">
						<input
							type="email"
							className="w-full py-2 pr-4 rounded-3xl text-gray-600 px-4 outline-none"
						></input>
						<i className="text-2xl absolute py-2 right-0 text-white cursor-pointer bg-[#f42f2c] h-[40px] w-[40px] rounded-3xl px-2 ">
							<AiOutlineArrowRight />
						</i>
					</div>
				</div>
			</div>
			<div className="bg-black py-6 px-6 text-white text-center md:flex justify-between">
				<div>
					<p>
						Copyright &copy;2023 All rights reserved | Cloned by{" "}
						<span className="text-[#f42f2c]">Joseph Magalem</span> using React
						Nextjs Taildwindcss from Colorlib
					</p>
				</div>
				<div className="flex text-2xl justify-center cursor-pointer">
					<AiFillFacebook />
					<AiFillTwitterSquare />
					<AiOutlineGithub />
					<AiOutlineLinkedin />
				</div>
			</div>
		</div>
	);
};

export default Footer;
