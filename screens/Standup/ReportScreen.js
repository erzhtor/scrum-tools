import React, { Component } from "react";
import { View } from "react-native";
import { StText } from "../../components";
import styled from "styled-components/native";

const StyledContainer = styled(View)`
	flex: 1;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.color.bg};
`;

const StyledHeader = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
	font-size: 24px;
	text-align: center;
`;
export class ReportScreen extends Component {
	render() {
		return (
			<StyledContainer>
				<StyledHeader>Today</StyledHeader>
			</StyledContainer>
		);
	}
}
