import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { StText } from "../../components";
import {
	INFINITY_CARD,
	CUP_CARD,
	THEME_DARK,
	THEME_LIGHT
} from "../../constants";

const StyledButton = styled(TouchableOpacity)`
	flex: 1;
	align-self: center;
	justify-content: center;
	height: 100%;
`;

const LargeCard = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
`;

const StyledImage = styled(Image)`
	width: 70%;
	height: 70%;
	resize-mode: contain;
	align-self: center;
`;

export const CardScreen = withTheme(({ item, theme, ...rest }) => {
	const isInfinity = item === INFINITY_CARD;
	const isCup = item === CUP_CARD;

	return (
		<StyledButton {...rest}>
			{isInfinity && (
				<StyledImage
					source={
						theme.name === THEME_LIGHT
							? require("../../assets/images/infinity-sign_dark.png")
							: require("../../assets/images/infinity-sign_light.png")
					}
				/>
			)}
			{isCup && (
				<StyledImage
					source={
						theme.name === THEME_LIGHT
							? require("../../assets/images/cup_dark.png")
							: require("../../assets/images/cup_light.png")
					}
				/>
			)}
			{!isInfinity && !isCup && (
				<LargeCard fontSize={item.length > 2 ? 140 : 240} centered>
					{item}
				</LargeCard>
			)}
		</StyledButton>
	);
});
