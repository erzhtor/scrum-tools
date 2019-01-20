import React from "react";
import { TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components/native";
import * as Animatable from "react-native-animatable";

import { StText } from "../../components";
import { INFINITY_CARD, CUP_CARD, THEME_LIGHT } from "../../constants";

const StyledButton = styled(TouchableOpacity)`
	flex: 1;
	align-self: center;
	justify-content: center;
	height: 100%;
`;

const LargeText = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
`;

const Card = withTheme(({ item, theme }) => {
	const isCup = item === CUP_CARD;

	if (isCup) {
		return (
			<Animatable.Image
				animation="zoomIn"
				style={{ width: "70%", height: "70%", alignSelf: "center" }}
				resizeMode="contain"
				source={
					theme.name === THEME_LIGHT
						? require("../../assets/images/cup_dark.png")
						: require("../../assets/images/cup_light.png")
				}
			/>
		);
	}

	const isInfinity = item === INFINITY_CARD;
	if (isInfinity) {
		return (
			<Animatable.Image
				style={{ width: "70%", height: "70%", alignSelf: "center" }}
				resizeMode="contain"
				animation="zoomIn"
				source={
					theme.name === THEME_LIGHT
						? require("../../assets/images/infinity-sign_dark.png")
						: require("../../assets/images/infinity-sign_light.png")
				}
			/>
		);
	}

	return (
		<Animatable.View animation="zoomIn">
			<LargeText fontSize={item.length > 2 ? 140 : 240} centered>
				{item}
			</LargeText>
		</Animatable.View>
	);
});

const StyledText = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
	align-self: center;
`;

export class CardScreen extends React.Component {
	state = {};
	render() {
		const { revealed } = this.state;
		const { item, ...rest } = this.props;
		return (
			<React.Fragment>
				{!revealed && (
					<StyledButton onPress={() => this.setState({ revealed: true })}>
						<StyledText>Tap to reveal</StyledText>
					</StyledButton>
				)}
				{revealed && (
					<StyledButton {...rest}>
						<Card item={item} />
					</StyledButton>
				)}
			</React.Fragment>
		);
	}
}
