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
	background: ${({ theme, warning }) =>
		warning ? theme.color.bgWarning : theme.color.bg};
	padding-bottom: 20px;
`;

const TapToStart = styled(StText)`
	font-size: 12px;
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
					timeout,
					onClick,
					onSliderChange
				}) => (
					<StyledTouchableHighlight
						onPress={participant ? onClick : null}
						underlayColor={participant ? "lightgreen" : null}
					>
						<StyledLayout warning={timeout}>
							<TotalTime totalMillis={totalMillis} />
							<Timer millis={participant ? count : millisPerUser} />
							<RangeSlider
								onSliderChange={onSliderChange}
								hidden={started}
								value={millisPerUser}
							/>
							{!started && <StartButton onPress={onClick} />}
							<TapToStart centered>
								{started ? `Participant ${participant}` : "Tap to start"}
							</TapToStart>
						</StyledLayout>
					</StyledTouchableHighlight>
				)}
			</StandupContext.Consumer>
		);
	}
}
