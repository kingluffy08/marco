import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

function Contact() {
	return (
		<div className="bg-[#f9f9ff]">
			<div className="px-6 py-20">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61776.701173045425!2d120.94453999926226!3d14.596578752494061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1679533194494!5m2!1sen!2sph"
					width="100%"
					height="445"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div className="px-6 md:flex gap-10 justify-evenly py-20">
				<div className="mb-10 flex-auto md:w-64">
					<div className="flex space-x-6 items-center mb-4">
						<div>
							<i className="text-2xl text-red-500">
								<AiOutlineHome />
							</i>
						</div>
						<div>
							<h1 className="font-extralight text-gray-700">
								Metro Manila, Philippines
							</h1>
							<p className="text-gray-400 font-light text-sm">
								1234 Example Street
							</p>
						</div>
					</div>
					<div className="flex space-x-6 items-center mb-4">
						<div>
							<i className="text-2xl text-red-500">
								<AiOutlinePhone />
							</i>
						</div>
						<div>
							<h1 className="font-extralight text-gray-700">00(958)9865 562</h1>
							<p className="text-gray-400 font-light text-sm">
								Monday to Friday
							</p>
						</div>
					</div>
					<div className="flex space-x-6 items-center mb-4">
						<div>
							<i className="text-2xl text-red-500">
								<AiOutlinePhone />
							</i>
						</div>
						<div>
							<h1 className="font-extralight text-gray-700">
								sample@gmail.com
							</h1>
							<p className="text-gray-400 font-light text-sm">
								Send us anytime!
							</p>
						</div>
					</div>
				</div>
				<div className="flex-auto md:w-64">
					<input
						className="bg-white border w-full py-4 text-sm  mb-4 text-gray-600 px-4 outline-none"
						type="text"
						placeholder="Enter your name"
					></input>
					<input
						className="bg-white border w-full py-4 text-sm  mb-4 text-gray-600 px-4 outline-none"
						type="email"
						placeholder="Enter email address"
					></input>
					<input
						className="bg-white border w-full py-4 text-sm  mb-4 text-gray-600 px-4 outline-none"
						type="text"
						placeholder="Enter subject"
					></input>
				</div>
				<div className="flex-auto md:w-64">
					<textarea className="w-full h-40 p-4 outline-none border"></textarea>
					<div className="flex justify-end mt-6">
						<button className="hover:bg-[#f44e4b] active:bg-red-300 mb-6 px-8 py h-10 uppercase bg-[#f42f2c] text-white font-medium text-sm">
							SEND MESSAGE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
