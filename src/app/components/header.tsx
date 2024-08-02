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
			</nav>
		</header>
	);
}
