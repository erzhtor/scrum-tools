import React, { Component } from "react";
import { TouchableHighlight, View } from "react-native";
import styled from "styled-components/native";

import { StandupContext } from "./context";
import { StText } from "../../components";
import { TotalTime, Timer, StartButton } from "./components";
import RangeSlider from "./components/RangeSlider";

const StyledTouchableHighlight = styled(TouchableHighlight)`
	flex: 1;
`;

const StyledLayout = styled(View)`
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.color.bg};
	padding-bottom: 20px;
`;

const TapToStart = styled(StText)`
	font-size: 12px;
	text-align: center;
	color: ${({ theme }) => theme.color.secondary};
`;

export class TimerScreen extends Component {
	render() {
		const { started } = this.props;
		return (
			<StandupContext.Consumer>
				{({
					totalMillis,
					millisPerUser,
					participant,
					count,
					onStart,
					onSliderChange
				}) => (
					<StyledTouchableHighlight
						onPress={participant ? onStart : null}
						underlayColor={participant ? "lightgreen" : null}
					>
						<StyledLayout>
							<TotalTime totalMillis={totalMillis} />
							<Timer millis={count || millisPerUser} />
							<RangeSlider
								onSliderChange={onSliderChange}
								hidden={started}
								value={millisPerUser}
							/>
							{!started && <StartButton onPress={onStart} />}
							<TapToStart>
								{started ? `Participant ${participant}` : "Tap to start"}
							</TapToStart>
						</StyledLayout>
					</StyledTouchableHighlight>
				)}
			</StandupContext.Consumer>
		);
	}
}
