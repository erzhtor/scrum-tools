import React from "react";
import { Card } from "./components";

const STANDARD_CARDS = ["0", "1/2", 1, 2, 3, 5, 8, 13, 20, 40, "?"];

export const CardListScreen = ({ onItemClick }) =>
	STANDARD_CARDS.map(item => (
		<Card key={item} onPress={() => onItemClick(item)}>
			{item}
		</Card>
	));
