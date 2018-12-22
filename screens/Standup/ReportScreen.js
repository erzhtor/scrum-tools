import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { StText } from "../../components";
import { StopButton } from "./components";
import { StandupContext } from "./context";

const StyledContainer = styled(View)`
	flex: 1;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.color.bg};
`;

const StyledHeader = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
	font-size: 24px;
`;
export class ReportScreen extends Component {
	render() {
		return (
			<StandupContext.Consumer>
				{({ onStop }) => (
					<StyledContainer>
						<StyledHeader centered>Today</StyledHeader>
						<StopButton onPress={onStop} />
					</StyledContainer>
				)}
			</StandupContext.Consumer>
		);
	}
}
