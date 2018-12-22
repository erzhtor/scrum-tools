import React from "react";
import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";

const StyledImage = styled(Image)`
	width: 108px;
	height: 108px;
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
			<StyledImage source={require("../../../assets/images/btn-start.png")} />
		</StyledTouchableOpacity>
	);
};
