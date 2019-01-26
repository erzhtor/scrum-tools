import React from "react";
import { TouchableOpacity } from "react-native";
import styled, { withTheme } from "styled-components/native";
import * as Animatable from "react-native-animatable";

import { StText, StPopup } from "../../components";
import { INFINITY_CARD, CUP_CARD, THEME_LIGHT } from "../../constants";

const StyledButton = styled(TouchableOpacity)`
	flex: 1;
	justify-content: center;
`;

const LargeCard = withTheme(({ item, theme }) => {
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
			<StText fontSize={item.length > 2 ? 140 : 240} centered>
				{item}
			</StText>
		</Animatable.View>
	);
});

const StyledText = styled(StText)`
	align-self: center;
`;

export class CardScreen extends React.Component {
	state = {};
	render() {
		const { revealed } = this.state;
		const { item, onPress } = this.props;
		return (
			<StPopup visible={!!item} onClose={onPress} fullscreen>
				<StyledButton
					onPress={() => {
						if (!revealed) {
							this.setState({ revealed: true });
						} else {
							onPress();
						}
					}}
				>
					{!revealed && <StyledText>Tap to reveal</StyledText>}
					{revealed && <LargeCard item={item} />}
				</StyledButton>
			</StPopup>
		);
	}
}
