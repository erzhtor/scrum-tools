import React, { useRef, useCallback, useContext } from 'react'
import { TouchableHighlight, View } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import * as Animatable from 'react-native-animatable'

import { StText } from '../../components'
import { StandupContext } from './context'
import { TotalTime, Timer, StartButton } from './components'
import RangeSlider from './components/RangeSlider'

const StyledTouchableHighlight = styled(TouchableHighlight)`
	flex: 1;
`

const StyledLayout = styled(View)`
	flex: 1;
	flex-direction: column;
	justify-content: space-around;
	align-items: stretch;
	background: ${({ theme, warning }) =>
		warning ? theme.color.bgWarning : theme.color.bg};
	padding-bottom: 20px;
`

export const TimerScreen = ({ onStart, onTap }) => {
	const textRef = useRef(null)
	const theme = useContext(ThemeContext)

	const {
		totalMillis, millisPerUser, participant,
		count, timeout, started, onSliderChange
	} = useContext(StandupContext)

	const handlePress = useCallback(() => {
		onTap()
		textRef.current.zoomIn(800)
	}, [onTap])


	return (
		<StyledTouchableHighlight
			onPress={started ? handlePress : null}
			underlayColor={
				started ? theme.color.underlayColor : null
			}
			activeOpacity={0.4}
		>
			<StyledLayout warning={timeout}>
				<TotalTime
					totalMillis={started ? totalMillis : 0}
					style={{ flex: 1 }}
				/>
				<View style={{ flex: 2 }}>
					<Timer millis={started ? count : millisPerUser} />
					<RangeSlider
						onSliderChange={onSliderChange}
						hidden={started}
						value={millisPerUser}
					/>
				</View>
				{!started && <StartButton onPress={onStart} />}
				<Animatable.View
					ref={textRef}
					style={{ flex: 1, alignItems: 'center' }}
				>
					<StText secondary fontSize={12} centered>
						{started ? `Participant ${participant}` : 'Tap to start'}
					</StText>
				</Animatable.View>
			</StyledLayout>
		</StyledTouchableHighlight>
	)
}
