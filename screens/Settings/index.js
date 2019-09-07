import React from 'react'
import { View, ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { StHeader } from '../../components/StHeader'
import { CardSettings } from './CardSettings'
import { ThemeSettings } from './ThemeSettings'
import { About } from './About'

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	flex: 1;
	padding: 28px 28px 0;
	justify-content: flex-start;
`

const StyledBorder = styled(View)`
	border-color: ${({ theme }) => theme.color.primary};
	border-bottom-width: 0.25px;
	border-style: solid;
	height: 1px;
`

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
			<ScrollView contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
				<StyledLayout>
					<ThemeSettings />
					<StyledBorder />
					<CardSettings />
					<StyledBorder />
					<About />
				</StyledLayout>
			</ScrollView>
		)
	}
}
