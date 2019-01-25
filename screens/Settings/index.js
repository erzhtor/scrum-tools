import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";

import { StHeader } from "../../components/StHeader";
import { SquareButton } from "./components/SquareButton";
import { CardSettings } from "./CardSettings";
import { ThemeSettings } from "./ThemeSettings";
import { About } from "./About";

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	flex: 1;
	padding: 28px 28px 0;
	justify-content: flex-start;
`;

const StyledSection = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	margin: 30px 0;
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
					<StyledSection>
						<CardSettings />
						<ThemeSettings />
					</StyledSection>
					<StyledBorder />
					<StyledSection>
						<About />
						<SquareButton onPress={() => this.setState({ modal: "donate" })}>
							Donate
						</SquareButton>
					</StyledSection>
				</StyledLayout>
			</ScrollView>
		);
	}
}
