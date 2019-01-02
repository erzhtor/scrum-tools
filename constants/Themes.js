const COMMON_COLORS = {
	light: "#FFFFFF",
	dark: "#131C2D"
};

export const DARK_THEME = {
	color: {
		bg: "#131C2D",
		secondary: "#777575",
		primary: "#FFFFFF",
		blue: "#2D3FDC",
		transparent: "rgba(0,0,0,0)",
		bgWarning: "orange",
		sliderColor: "#FFFFFF",
		tabIconFocused: "#FFFFFF",
		tabIcon: "#777575",
		...COMMON_COLORS
	}
};

export const LIGHT_THEME = {
	color: {
		bg: "#FFFFFF",
		secondary: "#777575",
		primary: "#151C28",
		blue: "#2D3FDC",
		transparent: "rgba(0,0,0,0)",
		bgWarning: "orange",
		sliderColor: "#151C28",
		tabIconFocused: "#151C28",
		tabIcon: "#a3a1a1",
		...COMMON_COLORS
	}
};
