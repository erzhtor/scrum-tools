import React from "react";
import { Image } from "react-native";
import styled from "styled-components";

const StyledImage = styled(Image)`
	width: 40px;
	height: 40px;
	resize-mode: contain;
	tint-color: ${({ focused, theme }) =>
		focused ? theme.color.tabIconFocused : theme.color.tabIcon};
`;

const iconStandup = require("../assets/images/icon-standup.png");
const iconCards = require("../assets/images/icon-cards.png");
const iconSettings = require("../assets/images/icon-settings.png");
const ICON_NAMES = {
	standup: iconStandup,
	cards: iconCards,
	settings: iconSettings
};

export const TabBarIcon = ({ focused, name }) => {
	return <StyledImage focused={focused} source={ICON_NAMES[name]} />;
};
