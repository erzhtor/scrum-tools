import React from "react";
import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";

const StyledImage = styled(Image)`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	resize-mode: contain;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
	align-items: center;
	padding: 10px;
	justify-content: center;
`;

export const StartButton = props => {
	return (
		<StyledTouchableOpacity {...props}>
			<StyledImage
				size={108}
				source={require("../../../assets/images/btn-start.png")}
			/>
		</StyledTouchableOpacity>
	);
};

export const StopButton = props => {
	return (
		<StyledTouchableOpacity {...props}>
			<StyledImage
				size={80}
				source={require("../../../assets/images/btn-stop.png")}
			/>
		</StyledTouchableOpacity>
	);
};
