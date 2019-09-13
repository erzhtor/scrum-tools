import React from 'react'
import { Vibration } from 'react-native'
import Swiper from 'react-native-swiper'
import { withTheme } from 'styled-components/native'
import { Audio } from 'expo-av'

import { MILLIS_IN_SECOND } from '../../constants'
import { StandupContext } from './context'
import { ReportScreen } from './ReportScreen'
import TimerScreen from './TimerScreen'

const INTERVAL_IN_MILLIS = 350
const VIBRATION_DURATION = 80
let interval

export default withTheme(
	class StandupScreen extends React.Component {
		static navigationOptions = {
			header: null
		};
		state = {
			millisPerUser: 120 * MILLIS_IN_SECOND,
			participant: 0,
			totalMillis: 0,
			started: false,
			initial: true
		};

		async componentDidMount() {
			this.soundObject = new Audio.Sound()
			await this.soundObject.loadAsync(
				require('../../assets/sounds/alarm.mp3')
			)
			this.setState({ soundLoaded: true })
		}

		/**
		 * On participant change handler.
		 */
		onTap() {
			Vibration.vibrate(VIBRATION_DURATION)
			const { participant, millisPerUser } = this.state
			this.setState({
				participant: participant + 1,
				count: millisPerUser,
				timeout: false
			})

			this.stopSound()
		}

		/**
		 * React interval handler.
		 */
		onInterval() {
			const { totalMillis, count, timeout = false } = this.state

			this.setState({ totalMillis: totalMillis + INTERVAL_IN_MILLIS })

			if (timeout) {
				return
			}

			const newCount = count - INTERVAL_IN_MILLIS
			if (newCount < 0) {
				this.onTimeOut()
			} else {
				this.setState({ count: newCount })
			}
		}

		/**
		 * Participant timeout handler.
		 */
		onTimeOut() {
			const { timeouts = 0 } = this.state
			this.setState({
				timeouts: timeouts + 1,
				timeout: true,
				count: 0
			})
			this.playSound()
		}

		async playSound() {
			if (this.state.soundLoaded) {
				await this.soundObject.playAsync()
			}
		}

		async stopSound() {
			if (this.state.soundLoaded) {
				await this.soundObject.stopAsync()
			}
		}

		/**
		 * Slider value change hander.
		 * Set millis per user when slider is changed
		 * @param {number} value milliseconds
		 */
		onSliderChange(value) {
			this.setState({ millisPerUser: value })
		}

		/**
		 * Stop button handler.
		 */
		onStop() {
			this.setState({ started: false, timeout: false })
			clearInterval(interval)
			this.stopSound()
		}

		/**
		 * Start button handler.
		 */
		onStart() {
			Vibration.vibrate(VIBRATION_DURATION)
			clearInterval(interval)
			interval = setInterval(this.onInterval.bind(this), INTERVAL_IN_MILLIS)

			this.setState({
				participant: 1,
				started: true,
				timeouts: 0,
				totalMillis: 0,
				count: this.state.millisPerUser
			})
		}

		componentWillUnmount() {
			this.onStop()
		}

		render() {
			const {
				participant,
				millisPerUser,
				count,
				totalMillis,
				timeouts,
				timeout,
				started,
				initial
			} = this.state
			return (
				<StandupContext.Provider
					value={{
						totalMillis,
						participant,
						count,
						millisPerUser,
						timeouts,
						started,
						timeout,
						onSliderChange: this.onSliderChange.bind(this)
					}}
				>
					<Swiper
						loop={false}
						showsPagination={started || !initial}
						scrollEnabled={started || !initial}
						dotColor={this.props.theme.color.secondary}
						onIndexChanged={index => {
							this.setState({ initial: index === 0 })
						}}
					>
						<TimerScreen
							onTap={this.onTap.bind(this)}
							onStart={this.onStart.bind(this)}
						/>
						<ReportScreen
							onStop={this.onStop.bind(this)}
							onEnd={() => this.swiper.scrollBy(-1)}
						/>
					</Swiper>
				</StandupContext.Provider>
			)
		}
	}
)
