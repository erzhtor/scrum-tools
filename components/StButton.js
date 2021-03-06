import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { StText } from "./StText";

const StyledButton = styled(TouchableOpacity)`
	align-items: center;
	padding: 10px;
	justify-content: center;
	${({ theme, bordered }) =>
		bordered ? `border: 5px solid ${theme.color.primary}` : ""};
	${({ theme, inverted }) =>
		inverted ? `background: ${theme.color.primary}` : ""};
`;

const StyledView = styled(View)`
	align-self: flex-start;
`;

const StyledText = styled(StText)`
	color: ${({ theme, inverted }) =>
		inverted ? theme.color.bg : theme.color.primary};
`;

export const StButton = ({ children, inverted, bordered, ...rest }) => {
	return (
		<StyledView>
			<StyledButton {...rest} inverted={inverted} bordered={bordered}>
				<StyledText centered inverted={inverted}>
					{children}
				</StyledText>
			</StyledButton>
		</StyledView>
	);
};
