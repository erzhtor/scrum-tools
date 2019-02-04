import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { StText } from "../../../components";
import { INFINITY_CARD, CUP_CARD, THEME_DARK } from "../../../constants";

const StyledLayout = styled(TouchableOpacity)`
	align-items: center;
	justify-content: center;
	flex: 1;
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 6px;
`;

const StyledCard = styled(View)`
	height: 17%;
	aspect-ratio: 1;
	margin: 1%;
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
			<StyledLayout>
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
			</StyledLayout>
		</StyledCard>
	);
});
