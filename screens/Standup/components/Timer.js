import React from "react";
import styled from "styled-components/native";
import { StText } from "../../../components/StText";
import { formatMillisToTime } from "../lib/format-millis-to-time";

const StyledText = styled(StText)`
	font-size: 72;
	font-size: 90px;
`;

export const Timer = ({ millis, ...rest }) => (
	<StyledText centered {...rest}>
		{formatMillisToTime(millis)}
	</StyledText>
);
