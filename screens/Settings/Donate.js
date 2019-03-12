import React from "react";
import { Linking } from "react-native";

import { RadioPopup } from "./components/RadioPopup";

const RADIO_ITEMS = [
	{ label: "Send me a coffee", value: 100 },
	{ label: "Send me a coffee and cake", value: 300 },
	{ label: "Send me what you wish", value: 0 }
];

export const Donate = () => (
	<RadioPopup
		values={RADIO_ITEMS}
		onChange={value => {
			Linking.openURL("https://money.yandex.ru/to/410018419874117/" + value);
		}}
	>
		Donate
	</RadioPopup>
);
