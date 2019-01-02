import { AsyncStorage } from "react-native";
import { Cards } from "../constants";

const APP_KEY = "@scrum-tools";
const CARD_PATTERN_KEY = `${APP_KEY}:CARD_PATTERN`;

export async function setCardPattern(value) {
	await AsyncStorage.setItem(CARD_PATTERN_KEY, value);
}

export async function getCardPattern() {
	const cardPattern = await AsyncStorage.getItem(CARD_PATTERN_KEY);
	return cardPattern ? cardPattern : Cards.STANDARD.name;
}
