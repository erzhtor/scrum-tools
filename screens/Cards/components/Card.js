import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { StText } from "../../../components";

const StyledCard = styled(TouchableOpacity)`
	width: 80px;
	height: 80px;
	margin: 10px;
	background-color: ${({ theme }) => theme.color.primary};
	align-content: center;
	border-radius: 6px;
	display: flex;
	justify-content: center;
`;

const StyledText = styled(StText)`
	color: ${({ theme }) => theme.color.bg};
	font-size: 32px;
`;

export const Card = ({ children, ...rest }) => {
	return (
		<StyledCard {...rest}>
			<StyledText centered>{children}</StyledText>
		</StyledCard>
	);
};
