import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { StHeader } from "../../components/StHeader";
import { StText } from "../../components";
import { version } from "../../package.json";

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	height: 100%;
	padding: 0 20px;
`;

const StyledText = styled(StText)`
	text-transform: uppercase;
	padding: 10px;
`;

const StyledWrapper = styled(View)`
	width: 100%;
`;

const AppVersion = () => (
	<StyledWrapper style={{ flex: 0.5 }}>
		<StyledText centered fontSize="14">
			Version
		</StyledText>
		<StyledText secondary fontSize="14" centered>
			{version}
		</StyledText>
	</StyledWrapper>
);

export default class AboutScreen extends Component {
	static navigationOptions = {
		title: null,
		header: props => (
			<StHeader centered {...props}>
				About
			</StHeader>
		),
		tabBarVisible: false
	};

	render() {
		return (
			<ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
				<StyledLayout>
					<AppVersion />
					<StyledWrapper>
						<StyledText fontSize="16">Main functionalities:</StyledText>
						<StyledText>1. Standup Timer</StyledText>
						<StyledText secondary fontSize="12" style={{ paddingLeft: 25 }}>
							Used to track standup meeting time
						</StyledText>
						<StyledText>2. Scrum Poker Cards</StyledText>
						<StyledText secondary fontSize="12" style={{ paddingLeft: 25 }}>
							Used to estimate tasks
						</StyledText>
					</StyledWrapper>
					<StyledWrapper>
						<StyledText slim secondary style={{ lineHeight: 25 }}>
							This application was made with intention to improve scrum
							practice: stand up meetings and task evaluations. hope it will
							help you to be more efficient and agile!
						</StyledText>
					</StyledWrapper>
				</StyledLayout>
			</ScrollView>
		);
	}
}
