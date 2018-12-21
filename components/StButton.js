import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { StText } from "./StText";

const StyledButton = styled(TouchableOpacity)`
	background: ${({ theme, light }) =>
		light ? theme.color.primary : theme.color.bg};
	align-items: center;
	padding: 10px;
	justify-content: center;
	border: 5px solid
		${({ theme, bordered }) =>
			bordered ? theme.color.blue : theme.color.transparent};
`;

const StyledView = styled(View)`
	align-self: flex-start;
`;

const StyledText = styled(StText)`
	color: ${({ theme, light }) =>
		light ? theme.color.primary : theme.color.bg};
	text-align: center;
`;

export const StButton = ({ children, light, selected, ...rest }) => {
	return (
		<StyledView>
			<StyledButton light={light} bordered={selected} {...rest}>
				<StyledText light={!light}>{children}</StyledText>
			</StyledButton>
		</StyledView>
	);
};
