import { AsyncStorage } from "react-native";
import { Cards } from "../constants";
import { THEME_DARK } from "../screens/Standup/constants";

const APP_KEY = "@scrum-tools";
const CARD_PATTERN_KEY = `${APP_KEY}:CARD_PATTERN`;
const THEME_KEY = `${APP_KEY}:THEME`;

export async function setCardPattern(value) {
	await AsyncStorage.setItem(CARD_PATTERN_KEY, value);
}

export async function getCardPattern() {
	const cardPattern = await AsyncStorage.getItem(CARD_PATTERN_KEY);
	return cardPattern ? cardPattern : Cards.STANDARD.name;
}

export async function setTheme(value) {
	await AsyncStorage.setItem(THEME_KEY, value);
}

export async function getTheme() {
	const theme = await AsyncStorage.getItem(THEME_KEY);
	return theme ? theme : THEME_DARK;
}
