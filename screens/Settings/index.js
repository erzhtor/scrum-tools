import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { StButton, StText } from "../../components";
import { CardsPattern } from "./CardsPattern";
import { THEME_DARK, THEME_LIGHT } from "../../constants";
import { AppContext } from "../../context";
import { StHeader } from "../../components/StHeader";

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	flex: 1;
	padding: 28px 28px 0;
	flex-direction: column;
	justify-content: flex-start;
`;

const StyledSection = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

const StyledBorder = styled(View)`
	border-color: ${({ theme }) => theme.color.primary};
	border-bottom-width: 0.25px;
	margin-bottom: 15px;
	flex: 1;
`;

const StyledButton = styled(StButton)`
	width: 127px;
	height: 127px;
	border-radius: 22px;
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
				<AppContext.Consumer>
					{({ onThemeChange, themeKey }) => (
						<StyledLayout>
							<StyledSection>
								<CardsPattern />
							</StyledSection>
							<StyledBorder />
							<StyledSection>
								<StyledButton
									selected={themeKey === THEME_DARK}
									onPress={() => onThemeChange(THEME_DARK)}
								>
									Dark Theme
								</StyledButton>
								<StyledButton
									selected={themeKey === THEME_LIGHT}
									light
									onPress={() => onThemeChange(THEME_LIGHT)}
								>
									Light Theme
								</StyledButton>
							</StyledSection>
							<StyledBorder />
							<StyledSection>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate("About")}
								>
									<StText centered fontSize={18}>
										About
									</StText>
								</TouchableOpacity>
								<StText centered fontSize={18}>
									Donate
								</StText>
							</StyledSection>
						</StyledLayout>
					)}
				</AppContext.Consumer>
			</ScrollView>
		);
	}
}
