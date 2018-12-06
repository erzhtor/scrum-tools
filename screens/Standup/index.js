import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Slider from "react-native-slider";
import styled from "styled-components/native";
import ReactInterval from "react-interval";

import { formatMillisToTime } from "./lib/format-millis-to-time";
import Constants from "../../constants/Layout";
import { Timer } from "./Timer";
import { MILLIS_IN_SECOND, INTERVAL_IN_MILLIS } from "./constants";
import { TotalTime } from "./TotalTime";

const StyledTouchableHighlight = styled(TouchableHighlight)`
	flex: 1;
`;

const StyledLayout = styled(View)`
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const StyledSlider = styled(Slider)`
	${({ hidden }) => (hidden ? "opacity: 0;" : "")};
`;

const StyledRangeContainer = styled(View)`
	width: ${Constants.window.width};
	padding: 20px;
`;

const StyledTimeContainer = styled(View)`
	align-items: center;
`;

const StyledTapToStartContainer = styled(View)`
	padding: 30px;
`;

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

	render() {
		const { participant, millisPerUser, count, totalMillis } = this.state;
		return (
			<StyledTouchableHighlight
				onPress={this.onTap.bind(this)}
				underlayColor="lightgreen"
			>
				<StyledLayout>
					<ReactInterval
						timeout={INTERVAL_IN_MILLIS}
						enabled={true}
						callback={this.onInterval.bind(this)}
					/>
					<TotalTime>Total Time: {formatMillisToTime(totalMillis)}</TotalTime>

					<StyledTimeContainer>
						<Timer>{formatMillisToTime(count || millisPerUser)}</Timer>
						<StyledRangeContainer>
							<StyledSlider
								hidden={!!participant}
								value={this.state.millisPerUser}
								onValueChange={value => this.setState({ millisPerUser: value })}
								minimumValue={0}
								maximumValue={300 * MILLIS_IN_SECOND}
								step={10 * MILLIS_IN_SECOND}
							/>
						</StyledRangeContainer>
					</StyledTimeContainer>

					<StyledTapToStartContainer>
						<Text>
							{!participant ? "Tap to start" : `Participant ${participant}`}
						</Text>
					</StyledTapToStartContainer>
				</StyledLayout>
			</StyledTouchableHighlight>
		);
	}
}
