import React from "react";
import { View, ScrollView, Platform } from "react-native";
import styled from "styled-components/native";

import { StHeader } from "../../components/StHeader";
import { CardSettings } from "./CardSettings";
import { ThemeSettings } from "./ThemeSettings";
import { About } from "./About";
import { Donate } from "./Donate";

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	flex: 1;
	padding: 28px 28px 0;
	justify-content: flex-start;
`;

const StyledBorder = styled(View)`
	border-color: ${({ theme }) => theme.color.primary};
	border-bottom-width: 0.25px;
`;

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: null,
		header: props => (
			<StHeader centered {...props}>
				Settings
			</StHeader>
		)
	};

	render() {
		return (
			<ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
				<StyledLayout>
					<ThemeSettings />
					<StyledBorder />
					<CardSettings />
					<StyledBorder />
					{Platform.OS !== "android" && (
						<React.Fragment>
							<Donate />
							<StyledBorder />
						</React.Fragment>
					)}
					<About />
				</StyledLayout>
			</ScrollView>
		);
	}
}
