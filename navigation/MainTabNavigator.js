import React from "react";
import {
	createStackNavigator,
	createBottomTabNavigator
} from "react-navigation";

import StandupScreen from "../screens/Standup";
import CardsScreen from "../screens/Cards";
import SettingsScreen from "../screens/Settings";
import TabBarIcon from "../components/TabBarIcon";

const StandupStack = createStackNavigator({
	Standup: StandupScreen
});

StandupStack.navigationOptions = {
	tabBarLabel: "Standup",
	tabBarIcon: ({ focused }) => <TabBarIcon name="standup" focused={focused} />
};

const CardsStack = createStackNavigator({
	Cards: CardsScreen
});

CardsStack.navigationOptions = {
	tabBarLabel: "Cards",
	tabBarIcon: ({ focused }) => <TabBarIcon name="cards" focused={focused} />
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
	tabBarLabel: "Settings",
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
				backgroundColor: "transparent"
			}
		}
	}
);
