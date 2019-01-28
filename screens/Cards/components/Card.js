import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { StText } from "../../../components";
import { INFINITY_CARD, CUP_CARD, THEME_DARK } from "../../../constants";

const StyledCard = styled(TouchableOpacity)`
	width: 80px;
	height: 80px;
	margin: 10px;
	background-color: ${({ theme }) => theme.color.primary};
	align-items: center;
	border-radius: 6px;
	display: flex;
	justify-content: center;
`;

const StyledText = styled(StText)`
	color: ${({ theme }) => theme.color.bg};
`;

const StyledImage = styled(Image)`
	width: 50;
	height: 50;
	resize-mode: contain;
`;

export const Card = withTheme(({ item, theme, ...rest }) => {
	const isInfinity = item === INFINITY_CARD;
	const isCup = item === CUP_CARD;
	return (
		<StyledCard {...rest}>
			{isInfinity && (
				<StyledImage
					source={
						theme.name === THEME_DARK
							? require("../../../assets/images/infinity-sign_dark.png")
							: require("../../../assets/images/infinity-sign_light.png")
					}
				/>
			)}
			{isCup && (
				<StyledImage
					source={
						theme.name === THEME_DARK
							? require("../../../assets/images/cup_dark.png")
							: require("../../../assets/images/cup_light.png")
					}
				/>
			)}
			{!isInfinity && !isCup && (
				<StyledText fontSize={item.length > 2 ? 34 : 42}>{item}</StyledText>
			)}
		</StyledCard>
	);
});
