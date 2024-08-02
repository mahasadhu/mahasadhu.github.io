'use client';

import { data } from '../data/data';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header({ activeMenu, isDarkMode, ref }: { activeMenu: string; isDarkMode: boolean; ref?: React.RefObject<HTMLElement> }) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		setScrollPosition(document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<header
			ref={ref}
			className={`${isDarkMode ? 'bg-background-dark' : 'bg-background-white'} sticky top-0 z-50 mx-auto ${scrollPosition == 0 ? 'py-4' : ''} w-full ps-4 transition-spacing md:px-8`}
		>
			<nav className="mx-auto flex items-center justify-between md:py-2">
				<span className="flex align-middle">
					<span className={`${activeMenu == data.menuHomeName ? 'nav-active' : ''} hover:nav-active pb-0.5`}>
						<Link
							className={`${isDarkMode ? 'bg-background-dark text-text-white' : 'bg-background-white text-text-black'} type-title flex items-center px-2 py-2`}
							href="/"
						>
							Home
						</Link>
					</span>
					<span className={`${activeMenu == data.menuExperienceName ? 'nav-active' : ''} hover:nav-active pb-0.5`}>
						<Link
							className={`${isDarkMode ? 'bg-background-dark text-text-white' : 'bg-background-white text-text-black'} type-title flex items-center px-2 py-2`}
							href="/experience"
						>
							Experience
						</Link>
					</span>
					<span className={`${activeMenu == data.menuContactName ? 'nav-active' : ''} hover:nav-active pb-0.5`}>
						<Link
							className={`${isDarkMode ? 'bg-background-dark text-text-white' : 'bg-background-white text-text-black'} type-title flex items-center px-2 py-2`}
							href="/contact"
						>
							Contact
						</Link>
					</span>
				</span>

				{/* <span className="self-center pb-0.5">
					<Link
						className={`md:type-title ${plus_jakarta_sans.className} flex items-center rounded-full bg-primary-base px-4 py-2 text-[12px] font-bold text-text-white shadow-lg transition duration-300 ease-in-out hover:shadow-primary-base active:scale-95 md:px-5 md:py-4`}
						href="/contact"
						target="_blank"
					>
						contact
					</Link>
				</span> */}
				{/* <span className="flex align-middle">
					<span className="self-center pb-0.5">
						<Link
							className={`md:type-title ${plus_jakarta_sans.className} flex items-center rounded-full bg-primary-base px-4 py-2 text-[12px] font-bold text-text-white shadow-lg transition duration-300 ease-in-out hover:shadow-primary-base active:scale-95 md:px-5 md:py-4`}
							href="/contact"
							target="_blank"
						>
							contact
						</Link>
					</span>
					<div className="dropdown dropdown-end dropdown-bottom md:hidden">
						<div tabIndex={0} role="button" className="btn m-1 p-3">
							<span className={`material-symbols-outlined ${isDarkMode ? "text-text-white" : "text-text-black"}`}>menu</span>
						</div>
						<ul tabIndex={0} className="dropdown-content menu z-[1] mt-2 w-[80vw] rounded-sm bg-background-white p-2">
							<li className={`text-lg font-semibold ${plus_jakarta_sans.className}`}>
								<Link
									className={`${activeMenu == data.menuHomeName ? "bg-primary-light" : ""} rounded-md p-3 active:bg-primary-light`}
									href="/"
								>
									Home
								</Link>
							</li>
							<li className={`text-lg font-semibold ${plus_jakarta_sans.className}`}>
								<Link
									className={`${activeMenu == data.menuExperienceName ? "bg-primary-light" : ""} rounded-md p-3 active:bg-primary-light`}
									href="/services/"
								>
									Experience
								</Link>
							</li>
						</ul>
					</div>
				</span> */}
			</nav>
		</header>
	);
}
