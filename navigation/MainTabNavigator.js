import React from "react";
import { Platform } from "react-native";
import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import StatsScreen from "../screens/Stats";
import StandupScreen from "../screens/Standup";
import CardsScreen from "../screens/Cards";
import SettingsScreen from "../screens/Settings";

const StandupStack = createStackNavigator({
	Standup: StandupScreen
});

StandupStack.navigationOptions = {
	tabBarLabel: "Standup",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === "ios"
					? `ios-people${focused ? "" : "-outline"}`
					: "md-people"
			}
		/>
	)
};

const StatsStack = createStackNavigator({
	Stats: StatsScreen
});

StatsStack.navigationOptions = {
	tabBarLabel: "Stats",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === "ios"
					? `ios-stats${focused ? "" : "-outline"}`
					: "md-stats"
			}
		/>
	)
};

const CardsStack = createStackNavigator({
	Cards: CardsScreen
});

CardsStack.navigationOptions = {
	tabBarLabel: "Cards",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === "ios"
					? `ios-grid${focused ? "" : "-outline"}`
					: "md-grid"
			}
		/>
	)
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
	tabBarLabel: "Settings",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === "ios"
					? `ios-options${focused ? "" : "-outline"}`
					: "md-options"
			}
		/>
	)
};

export default createBottomTabNavigator({
	StandupStack,
	StatsStack,
	CardsStack,
	SettingsStack
});
