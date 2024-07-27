import { Lato, Plus_Jakarta_Sans } from "next/font/google";

export const plus_jakarta_sans = Plus_Jakarta_Sans({
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-plus-jakarta-sans",
	display: "swap",
	style: ["normal", "italic"],
});

export const lato = Lato({
	weight: ["100", "300", "400", "700", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-lato",
	display: "swap",
});
