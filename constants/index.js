export * from "./Colors";
export * from "./Layout";
export * from "./Themes";

export const Cards = {
	STANDARD: {
		name: "standard",
		value: "0 1/2 1 2 3 5 8 13 20 40 100".split(" ")
	},
	T_SHIRT: {
		name: "t-shirt",
		value: "xs x m l xl xxl".split(" ")
	},
	FIBONACCI: {
		name: "fibonacci",
		value: "0 1 2 3 5 8 13 21 34 55 89 144".split(" ")
	}
};

export const QUESTION_CARD = "?";
export const INFINITY_CARD = "∞";

export const THEME_DARK = "THEME_DARK";
export const THEME_LIGHT = "THEME_LIGHT";
export const MILLIS_IN_SECOND = 1000;
