import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { StText } from '../../../components'
import { TotalTime, Timer, StartButton } from '../components'
import RangeSlider from '../components/RangeSlider'
import { MILLIS_IN_SECOND } from '../../../constants'

const StyledLayout = styled(View)`
	flex: 1;
	flex-direction: column;
	justify-content: space-around;
	align-items: stretch;
	background: ${({ theme }) => theme.color.bg};
	padding-bottom: 20px;
`

export const StartScreen = ({ navigation }) => {
	const [millis, setMillis] = useState(120 * MILLIS_IN_SECOND)
	const handleChange = useCallback(value => setMillis(value), [])
	const handleStart = useCallback(() => navigation.navigate('Timer', { millis }), [millis, navigation])

	return (
		<StyledLayout>
			<TotalTime totalMillis={0} style={{ flex: 1 }} />
			<View style={{ flex: 2 }}>
				<Timer millis={millis} />
				<RangeSlider
					onRangeChange={handleChange}
					value={millis}
				/>
			</View>
			<StartButton onPress={handleStart} />
			<View style={{ flex: 1, alignItems: 'center' }}>
				<StText secondary fontSize={12} centered>Tap to start</StText>
			</View>
		</StyledLayout>
	)
}
