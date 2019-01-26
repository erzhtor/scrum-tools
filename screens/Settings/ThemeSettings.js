import React from "react";

import { THEME_DARK, THEME_LIGHT } from "../../constants";
import { AppContext } from "../../context";
import { RadioPopup } from "./components/RadioPopup";

const RADIO_ITEMS = [
	{ label: "LIGHT", value: THEME_LIGHT },
	{ label: "DARK", value: THEME_DARK }
];

export const ThemeSettings = () => (
	<AppContext.Consumer>
		{({ onThemeChange, themeKey }) => (
			<RadioPopup
				values={RADIO_ITEMS}
				selected={themeKey}
				onChange={onThemeChange}
			>
				Theme
			</RadioPopup>
		)}
	</AppContext.Consumer>
);
