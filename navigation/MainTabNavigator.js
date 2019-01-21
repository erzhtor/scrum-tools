import React from "react";
import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";
import styled from "styled-components";

import StandupScreen from "../screens/Standup";
import CardsScreen from "../screens/Cards";
import SettingsScreen from "../screens/Settings";
import { StText, TabBarIcon } from "../components";
import AboutScreen from "../screens/About";

const StyledTabBarLabel = styled(StText)`
	font-size: 10px;
	color: ${({ theme, focused }) =>
		focused ? theme.color.primary : theme.color.secondary};
	padding-bottom: 3px;
`;

const StandupStack = createStackNavigator({
	Standup: StandupScreen
});

StandupStack.navigationOptions = {
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel slim centered focused={focused}>
			Standup
		</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => <TabBarIcon name="standup" focused={focused} />
};

const CardsStack = createStackNavigator({
	Cards: CardsScreen
});

CardsStack.navigationOptions = {
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel slim centered focused={focused}>
			Cards
		</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => <TabBarIcon name="cards" focused={focused} />
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
	About: AboutScreen
});

SettingsStack.navigationOptions = ({ navigation }) => ({
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel slim centered focused={focused}>
			Settings
		</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => <TabBarIcon name="settings" focused={focused} />,
	tabBarVisible: navigation.state.index === 0
});

export default createBottomTabNavigator(
	{
		StandupStack,
		CardsStack,
		SettingsStack
	},
	{
		tabBarOptions: {
			style: {
				borderTopColor: "transparent",
				backgroundColor: "transparent",
				height: 70
			}
		}
	}
);
