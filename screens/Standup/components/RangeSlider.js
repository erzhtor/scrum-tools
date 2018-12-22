import React from "react";
import Slider from "react-native-slider";
import styled from "styled-components/native";
import { View } from "react-native";

import { MILLIS_IN_SECOND } from "../constants";
import Constants from "../../../constants/Layout";

const StyledSlider = styled(Slider)`
	${({ hidden }) => (hidden ? "opacity: 0;" : "")};
`;

const StyledRangeContainer = styled(View)`
	width: ${Constants.window.width};
	padding: 20px;
`;

const Range = ({ onSliderChange, value, hidden }) => {
	return (
		<StyledRangeContainer>
			<StyledSlider
				hidden={hidden}
				value={value}
				onValueChange={onSliderChange}
				minimumValue={0}
				maximumValue={300 * MILLIS_IN_SECOND}
				step={10 * MILLIS_IN_SECOND}
				minimumTrackTintColor="red"
				maximumTrackTintColor="white"
				thumbTintColor="white"
			/>
		</StyledRangeContainer>
	);
};

export default Range;
