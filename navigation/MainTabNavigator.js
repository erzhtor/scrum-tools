import React from "react";
import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";
import styled from "styled-components";

import StandupScreen from "../screens/Standup";
import CardsScreen from "../screens/Cards";
import SettingsScreen from "../screens/Settings";
import TabBarIcon from "../components/TabBarIcon";
import { CustomText } from "../components/CustomText";

const StyledTabBarLabel = styled(CustomText)`
	font-family: "Slim Joe";
	font-size: 10px;
	text-align: center;
	color: ${({ theme, focused }) =>
		focused ? theme.color.primary : theme.color.secondary};
	padding-bottom: 3px;
`;

const StandupStack = createStackNavigator({
	Standup: StandupScreen
});

StandupStack.navigationOptions = {
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel focused={focused}>Standup</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => <TabBarIcon name="standup" focused={focused} />
};

const CardsStack = createStackNavigator({
	Cards: CardsScreen
});

CardsStack.navigationOptions = {
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel focused={focused}>Cards</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => <TabBarIcon name="cards" focused={focused} />
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel focused={focused}>Settings</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => <TabBarIcon name="settings" focused={focused} />
};

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
