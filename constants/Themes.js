const COMMON_COLORS = {
	underlayColor: "#2D3FDC",
	bgWarning: "#c92a2a",
	transparent: "rgba(0,0,0,0)",
	blue: "#2D3FDC"
};

export const DarkTheme = {
	color: {
		bg: "#131C2D",
		secondary: "#777575",
		primary: "#FFFFFF",
		sliderColor: "#FFFFFF",
		tabIconFocused: "#FFFFFF",
		tabIcon: "#777575",
		popup: "rgba(128, 128, 128, 0.2)",
		...COMMON_COLORS
	},
	name: "THEME_DARK"
};

export const LightTheme = {
	color: {
		bg: "#FFFFFF",
		secondary: "#777575",
		primary: "#151C28",
		sliderColor: "#151C28",
		tabIconFocused: "#151C28",
		tabIcon: "#a3a1a1",
		popup: "rgba(128,128,128, 0.7)",
		...COMMON_COLORS
	},
	name: "THEME_LIGHT"
};
