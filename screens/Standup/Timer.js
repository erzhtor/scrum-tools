import React from "react";
import styled from "styled-components/native";
import { StText } from "../../components/StText";

const StyledText = styled(StText)`
	font-size: 72;
	font-size: 90px;
	text-align: center;
	color: ${({ theme }) => theme.color.primary};
`;

export const Timer = ({ children }) => <StyledText>{children}</StyledText>;
