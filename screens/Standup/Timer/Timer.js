import React, { useRef, useCallback, useContext } from 'react'
import { TouchableHighlight, View } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import * as Animatable from 'react-native-animatable'

import { StText } from '../../../components'
import { StandupContext } from '../context'
import { TotalTime, Timer } from '../components'

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

export const TimerScreen = ({ onTap }) => {
	const textRef = useRef(null)
	const theme = useContext(ThemeContext)

	const {
		totalMillis, participant,
		count, timeout
	} = useContext(StandupContext)

	const handlePress = useCallback(() => {
		onTap()
		textRef.current.zoomIn(800)
	}, [onTap])

	return (
		<StyledTouchableHighlight
			onPress={handlePress}
			underlayColor={theme.color.underlayColor}
			activeOpacity={0.4}
		>
			<StyledLayout warning={timeout}>
				<TotalTime totalMillis={totalMillis} style={{ flex: 1 }} />
				<View style={{ flex: 2 }}>
					<Timer millis={count} />
				</View>
				<Animatable.View
					ref={textRef}
					style={{ flex: 1, alignItems: 'center' }}
				>
					<StText secondary fontSize={12} centered>
						{`Participant ${participant}`}
					</StText>
				</Animatable.View>
			</StyledLayout>
		</StyledTouchableHighlight>
	)
}
