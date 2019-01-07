import React from "react";
import { Vibration } from "react-native";
import Swiper from "react-native-swiper";
import { withTheme } from "styled-components/native";

import { MILLIS_IN_SECOND } from "../../constants";
import { StandupContext } from "./context";
import { ReportScreen } from "./ReportScreen";
import TimerScreen from "./TimerScreen";

const INTERVAL_IN_MILLIS = 350;
const VIBRATION_DURATION = 80;
let interval;

export default withTheme(
	class StandupScreen extends React.Component {
		static navigationOptions = {
			header: null
		};

		state = {
			millisPerUser: 120 * MILLIS_IN_SECOND,
			participant: 0,
			totalMillis: 0,
			started: false
		};

		onTap() {
			Vibration.vibrate(VIBRATION_DURATION);
			const { participant, millisPerUser } = this.state;
			this.setState({
				participant: participant + 1,
				count: millisPerUser,
				timeout: false
			});
		}

		onInterval() {
			const { totalMillis, count, timeouts = 0, timeout = false } = this.state;

			this.setState({ totalMillis: totalMillis + INTERVAL_IN_MILLIS });

			if (timeout) {
				return;
			}

			const newCount = count - INTERVAL_IN_MILLIS;
			if (newCount < 0) {
				this.setState({ timeouts: timeouts + 1, timeout: true, count: 0 });
			} else {
				this.setState({ count: newCount });
			}
		}

		onSliderChange(value) {
			this.setState({ millisPerUser: value });
		}

		onStop() {
			this.setState({ started: false, timeout: false });
			clearInterval(interval);
		}

		onStart() {
			Vibration.vibrate(VIBRATION_DURATION);
			clearInterval(interval);
			interval = setInterval(this.onInterval.bind(this), INTERVAL_IN_MILLIS);

			this.setState({
				participant: 1,
				started: true,
				timeouts: 0,
				totalMillis: 0,
				count: this.state.millisPerUser
			});
		}

		componentWillUnmount() {
			this.onStop();
		}

		render() {
			const {
				participant,
				millisPerUser,
				count,
				totalMillis,
				timeouts,
				timeout,
				started
			} = this.state;
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
						showsPagination={true}
						dotColor={this.props.theme.color.secondary}
						ref={component => (this.swiper = component)}
					>
						<TimerScreen
							onTap={this.onTap.bind(this)}
							onStart={this.onStart.bind(this)}
						/>
						<ReportScreen onStop={this.onStop.bind(this)} />
					</Swiper>
				</StandupContext.Provider>
			);
		}
	}
);
