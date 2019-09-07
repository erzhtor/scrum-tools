import React, { Component } from 'react'
import { TouchableHighlight, View } from 'react-native'
import styled, { withTheme } from 'styled-components/native'
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

export default withTheme(
	class TimerScreen extends Component {
		handleTextRef = ref => (this.textContainer = ref);

		onTap = () => {
			this.props.onTap()
			if (this.textContainer) {
				this.textContainer.zoomIn(800)
			}
		};

		render() {
			const { onStart } = this.props
			return (
				<StandupContext.Consumer>
					{({
						totalMillis,
						millisPerUser,
						participant,
						count,
						timeout,
						started,
						onSliderChange
					}) => (
						<StyledTouchableHighlight
							onPress={started ? this.onTap : null}
							underlayColor={
								started ? this.props.theme.color.underlayColor : null
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
									ref={this.handleTextRef}
									style={{ flex: 1, alignItems: 'center' }}
								>
									<StText secondary fontSize={12} centered>
										{started ? `Participant ${participant}` : 'Tap to start'}
									</StText>
								</Animatable.View>
							</StyledLayout>
						</StyledTouchableHighlight>
					)}
				</StandupContext.Consumer>
			)
		}
	}
)
