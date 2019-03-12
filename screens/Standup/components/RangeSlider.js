import React from "react";
import Slider from "react-native-slider";
import styled, { withTheme } from "styled-components/native";
import { View } from "react-native";

import { MILLIS_IN_SECOND } from "../../../constants";
import Constants from "../../../constants/Layout";

const StyledSlider = styled(Slider)`
	${({ hidden }) => (hidden ? "opacity: 0;" : "")};
`;

const StyledRangeContainer = styled(View)`
	width: ${Constants.window.width};
	padding: 20px;
`;

const Range = ({ onSliderChange, value, hidden, theme }) => {
	return (
		<StyledRangeContainer>
			<StyledSlider
				hidden={hidden}
				value={value}
				onValueChange={onSliderChange}
				minimumValue={10 * MILLIS_IN_SECOND}
				maximumValue={300 * MILLIS_IN_SECOND}
				step={10 * MILLIS_IN_SECOND}
				minimumTrackTintColor="red"
				maximumTrackTintColor={theme.color.sliderColor}
				thumbTintColor={theme.color.sliderColor}
				thumbTouchSize={{ width: 170, height: 170 }}
			/>
		</StyledRangeContainer>
	);
};

export default withTheme(Range);
