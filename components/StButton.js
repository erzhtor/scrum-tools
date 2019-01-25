import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { StText } from "./StText";

const StyledButton = styled(TouchableOpacity)`
	align-items: center;
	padding: 10px;
	justify-content: center;
	border: 5px solid ${({ theme }) => theme.color.blue};
`;

const StyledView = styled(View)`
	align-self: flex-start;
`;

const StyledText = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
`;

export const StButton = ({ children, ...rest }) => {
	return (
		<StyledView>
			<StyledButton {...rest}>
				<StyledText centered>{children}</StyledText>
			</StyledButton>
		</StyledView>
	);
};
