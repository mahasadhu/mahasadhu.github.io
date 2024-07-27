import type { Metadata } from 'next';
import './globals.css';
import { lato, plus_jakarta_sans } from './fonts';

export const metadata: Metadata = {
	title: {
		template: '%s - Mahasadhu',
		default: 'Mahasadhu',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${lato.variable} ${plus_jakarta_sans.variable} mx-4 max-w-2xl bg-background-white pb-20 text-text-black md:mx-auto`}>
				{children}
			</body>
		</html>
	);
}
