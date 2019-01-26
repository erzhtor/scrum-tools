import React from "react";

import { Cards } from "../../constants";
import { AppContext } from "../../context";
import { RadioPopup } from "./components/RadioPopup";

const RADIO_ITEMS = [
	{ label: "STANDARD", value: Cards.STANDARD.name },
	{ label: "T-SHIRT", value: Cards.T_SHIRT.name },
	{ label: "FIBONACCI", value: Cards.FIBONACCI.name }
];

export const CardSettings = () => (
	<AppContext.Consumer>
		{({ onCardPatternChange, cardPattern }) => (
			<RadioPopup
				values={RADIO_ITEMS}
				selected={cardPattern}
				onChange={onCardPatternChange}
			>
				Cards' pattern
			</RadioPopup>
		)}
	</AppContext.Consumer>
);
