const COMMON_COLORS = {
	light: "#FFFFFF",
	dark: "#131C2D",
	underlayColor: "#2D3FDC",
	bgWarning: "#c92a2a"
};

export const DarkTheme = {
	color: {
		bg: "#131C2D",
		secondary: "#777575",
		primary: "#FFFFFF",
		blue: "#2D3FDC",
		transparent: "rgba(0,0,0,0)",
		sliderColor: "#FFFFFF",
		tabIconFocused: "#FFFFFF",
		tabIcon: "#777575",
		...COMMON_COLORS
	},
	name: "THEME_DARK"
};

export const LightTheme = {
	color: {
		bg: "#FFFFFF",
		secondary: "#777575",
		primary: "#151C28",
		blue: "#2D3FDC",
		transparent: "rgba(0,0,0,0)",
		sliderColor: "#151C28",
		tabIconFocused: "#151C28",
		tabIcon: "#a3a1a1",
		...COMMON_COLORS
	},
	name: "THEME_LIGHT"
};
