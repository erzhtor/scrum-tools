import React from "react";
import ReactInterval from "react-interval";
import Swiper from "react-native-swiper";
import { INTERVAL_IN_MILLIS, MILLIS_IN_SECOND } from "./constants";
import { StandupContext } from "./context";
import { ReportScreen } from "./ReportScreen";
import { TimerScreen } from "./TimerScreen";

export default class StandupScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	state = {
		millisPerUser: 120 * MILLIS_IN_SECOND,
		participant: 0,
		totalMillis: 0
	};

	onTap() {
		const { participant, millisPerUser } = this.state;
		this.setState({ participant: participant + 1, count: millisPerUser });
	}

	onInterval() {
		const { totalMillis, count, participant } = this.state;

		this.setState({ totalMillis: totalMillis + INTERVAL_IN_MILLIS });
		if (!participant) {
			return;
		}

		this.setState({ count: count - INTERVAL_IN_MILLIS });
	}

	onSliderChange(value) {
		this.setState({ millisPerUser: value });
	}

	render() {
		const { participant, millisPerUser, count, totalMillis } = this.state;
		return (
			<StandupContext.Provider
				value={{
					totalMillis,
					participant,
					count,
					millisPerUser,
					onStart: this.onTap.bind(this),
					onSliderChange: this.onSliderChange.bind(this)
				}}
			>
				<ReactInterval
					timeout={INTERVAL_IN_MILLIS}
					enabled={true}
					callback={this.onInterval.bind(this)}
				/>
				<Swiper loop={false} showsPagination={false}>
					<TimerScreen started={!!participant} />
					<ReportScreen />
				</Swiper>
			</StandupContext.Provider>
		);
	}
}
