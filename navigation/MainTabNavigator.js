import React from 'react'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation'
import styled from 'styled-components'

import CardsScreen from '../screens/Cards'
import SettingsScreen from '../screens/Settings'
import { StText, StTabBarIcon } from '../components'
import Timer from '../screens/Standup/Timer'
import { StartScreen } from '../screens/Standup/Start'

const StyledTabBarLabel = styled(StText)`
	font-size: 10;
	color: ${({ theme, focused }) =>
		focused ? theme.color.primary : theme.color.secondary};
	padding-bottom: 3;
`

const StandupStack = createStackNavigator({
	Standup: {
		screen: StartScreen,
		navigationOptions: {
			header: null
		}
	},
	Timer: {
		screen: Timer,
		navigationOptions: {
			header: null,
			tabBarVisible: false
		}
	}
})

StandupStack.navigationOptions = ({ navigation }) => ({
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel slim centered focused={focused}>
			Standup
		</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => <StTabBarIcon name="standup" focused={focused} />,
	tabBarVisible: navigation.state.index === 0
})

const CardsStack = createStackNavigator({
	Cards: {
		screen: CardsScreen,
		navigationOptions: {
			title: null,
			header: null
		}
	}
})

CardsStack.navigationOptions = {
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel slim centered focused={focused}>
			Cards
		</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => <StTabBarIcon name="cards" focused={focused} />
}

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen
})

SettingsStack.navigationOptions = ({ navigation }) => ({
	tabBarLabel: ({ focused }) => (
		<StyledTabBarLabel slim centered focused={focused}>
			Settings
		</StyledTabBarLabel>
	),
	tabBarIcon: ({ focused }) => (
		<StTabBarIcon name="settings" focused={focused} />
	),
	tabBarVisible: navigation.state.index === 0
})

export default createBottomTabNavigator(
	{
		StandupStack,
		CardsStack,
		SettingsStack
	},
	{
		tabBarOptions: {
			style: {
				borderTopColor: 'transparent',
				backgroundColor: 'transparent',
				height: 70,
				alignItems: 'stretch'
			},
			tabStyle: {
				alignItems: 'center',
				flexDirection: 'column',
				flex: 1
			}
		}
	}
)
