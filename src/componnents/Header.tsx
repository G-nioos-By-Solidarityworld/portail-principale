import { useState } from "react";
import { Settings, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Dark mode toggle
	const handleToggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		document.body.classList.toggle("dark", !isDarkMode);
	};

	// Menu toggle for responsiveness
	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={isDarkMode ? "bg-gray-[#fff] text-white" : "text-black"}>
			{/* left side */}
			<div className="flex justify-between">
				<div className="flex gap-4 w-full">
					<div className="h-[100px] w-[110px] mb-2">
						<img src={logo} alt="" />
					</div>
					<input
						type="text"
						placeholder="Recherche"
						className="hidden md:inline self-center w-full max-w-[420px] px-4 py-2 rounded-full border"
					/>
				</div>

				{/* right side */}
				<div className="hidden md:flex w-full gap-4 justify-end">
					<button className="bg-red-500 self-center rounded-full px-4 py-2 text-white text-xs md:text-md">
						24C Kinshasa
					</button>
					<button className="bg-red-500 self-center rounded-full px-4 py-2 text-white text-xs md:text-md">
						<Settings className="text-white" />
					</button>
					<button className="self-center border border-red-500 rounded-full px-4 py-2 text-red-500 text-xs md:text-md">
						Se connecter
					</button>
					<button onClick={handleToggleDarkMode} className="self-center border rounded-full px-4 py-2 text-xs md:text-md">
						{isDarkMode ? "Light Mode" : "Dark Mode"}
					</button>
				</div>

				{/* Responsive menu toggle button */}
				<div className="md:hidden flex items-center">
					<button onClick={handleToggleMenu} className={` ${isMenuOpen ? "border border-red-500 text-red-500 rounded px-1 py-[0.7]" : "border border-gray-500 rounded text-gray-500 px-1 py-[0.7]"}`}>
						{isMenuOpen ? <X size={24} className="text-red-500" /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Toggleable content sections */}
			<div className={`${isMenuOpen ? "flex" : "hidden"} md:flex md:justify-end text-sm md:text-xs font-bold text-gray-400 overflow-x-auto whitespace-nowrap`}>
				<div className="flex gap-4 px-3 py-3">
					<p>Messagerie</p>
					<p>Facebook</p>
					<p>Skype</p>
					<p>G.nioos note</p>
					<p>G.nioos drive</p>
					<p>Cartes</p>
					<p>Twitter</p>
				</div>
			</div>
			
			<div className={`${isMenuOpen ? "inline" : "hidden"} md:flex gap-6 items-center mt-8`}>
				<div className="bg-blue-700 flex w-100 gap-4 text-white py-4 px-4 md:px-8 overflow-x-auto whitespace-nowrap">
					<p>Services/Réseaux</p>
					<p>Portails annexes</p>
					<p>Portails par pays</p>
				</div>
				<div className="flex mt-5 md:mt-0 text-gray-400 overflow-x-auto whitespace-nowrap">
					<div className="flex gap-4 py-3 px-3">
						<p>ACTUALITES</p>
						<p>DIVERTISSEMENT</p>
						<p>FINANCE</p>
						<p>SPORT</p>
						<p>LOCOMOTION</p>
						<p>VIDEOS</p>
					</div>
				</div>
			</div>
		</header>
	);
}
