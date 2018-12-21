import React from "react";
import { View, ScrollView, Button } from "react-native";
import styled from "styled-components/native";
import { StText } from "../components/StText";
import { StButton } from "../components/StButton";

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	flex: 1;
	padding-top: 28px;
	flex-direction: row;
	justify-content: space-around;
`;

const StyledHeader = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
	font-size: 24px;
	text-align: center;
	background: ${({ theme }) => theme.color.bg};
	padding: 28px;
`;

const StyledButton = styled(StButton)`
	width: 127px;
	height: 127px;
	border-radius: 22px;
`;

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: null,
		header: props => <StyledHeader {...props}>Settings</StyledHeader>
	};

	render() {
		return (
			<ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
				<StyledLayout>
					<StyledButton selected>Dark Theme</StyledButton>
					<StyledButton light>Light Theme</StyledButton>
				</StyledLayout>
			</ScrollView>
		);
	}
}
