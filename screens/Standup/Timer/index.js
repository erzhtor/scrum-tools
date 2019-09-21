import React, { useCallback } from 'react'
import { Vibration } from 'react-native'
import Swiper from 'react-native-swiper'
import { withTheme } from 'styled-components/native'
import { Audio } from 'expo-av'

import { StandupContext } from '../context'
import { ReportScreen } from './Report'
import { TimerScreen } from './Timer'

const INTERVAL_IN_MILLIS = 350
const VIBRATION_DURATION = 80
let interval

export default withTheme(
	class StandupScreen extends React.Component {
		constructor(props) {
			super(props)
			const millisPerUser = props.navigation.getParam('millis')
			this.state = {
				millisPerUser,
				participant: 0,
				totalMillis: 0,
				stopped: true
			}
		}

		async componentDidMount() {
			this.soundObject = new Audio.Sound()
			await this.soundObject.loadAsync(
				require('../../../assets/sounds/alarm.mp3')
			)
			this.setState({ soundLoaded: true })

			Vibration.vibrate(VIBRATION_DURATION)
			clearInterval(interval)
			interval = setInterval(this.handleInterval.bind(this), INTERVAL_IN_MILLIS)

			this.setState({
				participant: 1,
				stopped: false,
				timeouts: 0,
				totalMillis: 0,
				count: this.state.millisPerUser
			})
		}

		componentWillUnmount() {
			this.handleStop()
		}

		/**
		 * On participant change handler.
		 */
		handleNextParticipant() {
			Vibration.vibrate(VIBRATION_DURATION)
			const { participant, millisPerUser } = this.state
			this.setState({
				participant: participant + 1,
				count: millisPerUser,
				timeout: false
			})
		}

		/**
		 * React interval handler.
		 */
		handleInterval() {
			const { totalMillis, count, timeout = false } = this.state

			this.setState({ totalMillis: totalMillis + INTERVAL_IN_MILLIS })

			if (timeout) {
				return
			}

			const newCount = count - INTERVAL_IN_MILLIS
			if (newCount < 0) {
				this.handleTimeout()
			} else {
				this.setState({ count: newCount })
			}
		}

		/**
		 * Participant timeout handler.
		 */
		handleTimeout() {
			const { timeouts = 0 } = this.state
			this.setState({
				timeouts: timeouts + 1,
				timeout: true,
				count: 0
			})
			this._playSound()
		}

		async _playSound() {
			if (this.state.soundLoaded) {
				await this.soundObject.replayAsync()
			}
		}

		/**
		 * Slider value change hander.
		 * Set millis per user when slider is changed
		 * @param {number} value milliseconds
		 */
		handleRangeChange(value) {
			this.setState({ millisPerUser: value })
		}

		/**
		 * Stop button handler.
		 */
		handleStop() {
			this.setState({ stopped: true, timeout: false })
			clearInterval(interval)
		}

		render() {
			const {
				participant,
				millisPerUser,
				count,
				totalMillis,
				timeouts,
				timeout,
				stopped
			} = this.state
			return (
				<StandupContext.Provider
					value={{
						totalMillis,
						participant,
						count,
						millisPerUser,
						timeouts,
						timeout,
						stopped,
						onRangeChange: this.handleRangeChange.bind(this)
					}}
				>
					<Swiper
						loop={false}
						showsPagination={true}
						scrollEnabled={true}
						dotColor={this.props.theme.color.secondary}
						onIndexChanged={index => {
							if (index === 0 && stopped) {
								this.props.navigation.goBack()
							}
						}}
					>
						<TimerScreen onTap={this.handleNextParticipant.bind(this)} />
						<ReportScreen
							onStop={this.handleStop.bind(this)}
							onEnd={() => this.swiper.scrollBy(-1)}
						/>
					</Swiper>
				</StandupContext.Provider>
			)
		}
	}
)
