import React from "react";
import ReactInterval from "react-interval";
import Swiper from "react-native-swiper";
import { INTERVAL_IN_MILLIS, MILLIS_IN_SECOND } from "./constants";
import { StandupContext } from "./context";
import { ReportScreen } from "./ReportScreen";
import TimerScreen from "./TimerScreen";

export default class StandupScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	state = {
		millisPerUser: 120 * MILLIS_IN_SECOND,
		participant: 0,
		totalMillis: 0,
		started: false
	};

	onClick() {
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

		let newCount = count - INTERVAL_IN_MILLIS;
		if (newCount < 0) {
			newCount = 0;
			this.setState({ timeouts: timeouts + 1, timeout: true });
		}

		this.setState({ count: newCount });
	}

	onSliderChange(value) {
		this.setState({ millisPerUser: value });
	}

	onStop() {
		this.setState({ started: false, timeout: false });
	}

	onStart() {
		this.setState({
			participant: 1,
			started: true,
			timeouts: 0,
			totalMillis: 0,
			count: this.state.millisPerUser
		});
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
					onStart: this.onStart.bind(this),
					onClick: this.onClick.bind(this),
					onStop: this.onStop.bind(this),
					onSliderChange: this.onSliderChange.bind(this)
				}}
			>
				<ReactInterval
					timeout={INTERVAL_IN_MILLIS}
					enabled={started}
					callback={this.onInterval.bind(this)}
				/>
				<Swiper
					loop={false}
					showsPagination={false}
					ref={component => (this.swiper = component)}
				>
					<TimerScreen />
					<ReportScreen />
				</Swiper>
			</StandupContext.Provider>
		);
	}
}
