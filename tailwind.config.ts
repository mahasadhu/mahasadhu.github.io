import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-plus-jakarta-sans)", "var(--font-lato)", "sans-serif"],
			},
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},
		},
		colors: {
			"primary-base": "#00bdfe",
			"primary-light": "#d6f4ff",
			"primary-dark": "#009af9",
			"primary-variant-1": "#06A1FC",
			alpha: "#00000000",
			"text-black": "#2b2b2b",
			"text-white": "#f8fafc",
			"background-white": "#f8fafc",
			"background-dark": "#12181F",
			"background-icon": "#002a38",
			"background-gray": "#e4e4e4",
			"button-black": "#2b2b2b",
			"button-white": "#f8fafc",
			"border-gray": "#e8e8e8",
			"border-dark-gray": "#b1b1b1",
			"hr-dark-gray": "#1d262f",
			"hr-blue": "#39B5FF",
			"why-us-item-dark": "#151C24",
			"why-us-item-icon-bg-active": "#23A8FF",
			"why-us-item-icon-bg": "#002B39",

			"gradient-start-principles": "#0ca4fc",
			"gradient-via-principles": "#00a1fd",
			"gradient-to-principles": "#018ff2",
			"gradient-start-why-us-item": "#008BF0",
			"gradient-to-why-us-item": "#00A3FE",

			"modal-bg-services": "#002b39",
		},
		backgroundSize: {
			auto: "auto",
			cover: "cover",
			contain: "contain",
			"50%": "50%",
			"25%": "25%",
			"30%": "30%",
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
