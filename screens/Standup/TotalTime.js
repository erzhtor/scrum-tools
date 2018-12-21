import React from "react";
import styled from "styled-components/native";
import { StText } from "../../components/StText";

const StyledText = styled(StText)`
	padding-top: 30;
	color: ${({ theme }) => theme.color.secondary};
	font-size: 14px;
	text-align: center;
`;

export const TotalTime = ({ children }) => <StyledText>{children}</StyledText>;
