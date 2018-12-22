import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { StText } from "../../components";

const StyledButton = styled(TouchableOpacity)`
	flex: 1;
	align-self: center;
	justify-content: center;
	height: 100%;
`;

const LargeCard = styled(StText)`
	font-size: 200;
	color: ${({ theme }) => theme.color.primary};
`;

export const CardScreen = ({ children, ...rest }) => {
	return (
		<StyledButton {...rest}>
			<LargeCard centered>{children}</LargeCard>
		</StyledButton>
	);
};
