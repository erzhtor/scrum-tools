import React from "react";
import styled from "styled-components/native";
import { StText } from "../../../components";
import { formatMillisToTime } from "../lib/format-millis-to-time";

const StyledText = styled(StText)`
	padding-top: 30;
	color: ${({ theme }) => theme.color.secondary};
	font-size: 14px;
`;

export const TotalTime = ({ totalMillis }) => (
	<StyledText centered>
		Total Time: {formatMillisToTime(totalMillis)}
	</StyledText>
);
