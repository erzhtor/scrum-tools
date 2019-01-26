import React from "react";

import { RadioPopup } from "./components/RadioPopup";

const RADIO_ITEMS = [
	{ label: "Send me a coffee", value: 100 },
	{ label: "Send me a coffee and cake", value: 300 },
	{ label: "Send me what you wish", value: null }
];

export const Donate = () => (
	<RadioPopup
		values={RADIO_ITEMS}
		onChange={value => {
			// TODO: build link
			// TODO: open link
		}}
	>
		Donate
	</RadioPopup>
);
