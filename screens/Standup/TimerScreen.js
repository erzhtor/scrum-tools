import React, { Component } from "react";
import { TouchableHighlight, View } from "react-native";
import styled, { withTheme } from "styled-components/native";

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
	justify-content: space-around;
	align-items: center;
	background: ${({ theme, warning }) =>
		warning ? theme.color.bgWarning : theme.color.bg};
	padding-bottom: 20px;
`;

const TapToStart = styled(StText)`
	font-size: 12px;
	flex: 1;
	color: ${({ theme }) => theme.color.secondary};
`;

export default withTheme(
	class TimerScreen extends Component {
		render() {
			return (
				<StandupContext.Consumer>
					{({
						totalMillis,
						millisPerUser,
						participant,
						count,
						timeout,
						started,
						onClick,
						onStart,
						onSliderChange
					}) => (
						<StyledTouchableHighlight
							onPress={started ? onClick : null}
							underlayColor={
								started ? this.props.theme.color.underlayColor : null
							}
							activeOpacity={0.5}
						>
							<StyledLayout warning={timeout}>
								<TotalTime totalMillis={started ? totalMillis : 0} />
								<Timer millis={started ? count : millisPerUser} />
								<RangeSlider
									onSliderChange={onSliderChange}
									hidden={started}
									value={millisPerUser}
								/>
								{!started && <StartButton onPress={onStart} />}
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
);
