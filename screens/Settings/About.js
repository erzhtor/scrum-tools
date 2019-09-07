import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Constants } from 'expo'

import { StHeader, StPopup, StText, StButton } from '../../components'

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	height: 100%;
	padding: 0 20px;
`

const StyledText = styled(StText)`
	text-transform: uppercase;
	padding: 10px;
`

const StyledWrapper = styled(View)`
	width: 100%;
`

const StyledButton = styled(StButton)`
	margin: 30px 0;
	padding: 0;
`

const AppVersion = () => (
	<StyledWrapper style={{ flex: 0.5 }}>
		<StyledText centered fontSize="14">
			Version
		</StyledText>
		<StyledText secondary fontSize="14" centered>
			{Constants.manifest.version}
		</StyledText>
	</StyledWrapper>
)

const AboutInfo = () => (
	<ScrollView contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
		<StyledLayout>
			<StHeader centered>About</StHeader>
			<AppVersion />
			<StyledWrapper>
				<StyledText fontSize="16">Main functionalities:</StyledText>
				<StyledText>1. Standup Timer</StyledText>
				<StyledText secondary fontSize="12" style={{ paddingLeft: 25 }}>
					Used to track standup meeting time
				</StyledText>
				<StyledText>2. Scrum Poker Cards</StyledText>
				<StyledText secondary fontSize="12" style={{ paddingLeft: 25 }}>
					Used to estimate tasks
				</StyledText>
			</StyledWrapper>
			<StyledWrapper>
				<StyledText slim secondary style={{ lineHeight: 25 }}>
					This application was made with intention to improve scrum practice:
					stand up meetings and task evaluations. hope it will help you to be
					more efficient and agile!
				</StyledText>
			</StyledWrapper>
		</StyledLayout>
	</ScrollView>
)

export class About extends Component {
	state = {
		isModalVisible: false
	};

	onPopupClose = () => {
		this.setState({ isModalVisible: false })
	};

	render() {
		return (
			<View>
				<StyledButton onPress={() => this.setState({ isModalVisible: true })}>
					About
				</StyledButton>
				<StPopup
					visible={this.state.isModalVisible}
					onClose={this.onPopupClose}
					fullscreen
				>
					<TouchableOpacity onPress={this.onPopupClose} style={{ flex: 1 }}>
						<AboutInfo />
					</TouchableOpacity>
				</StPopup>
			</View>
		)
	}
}
