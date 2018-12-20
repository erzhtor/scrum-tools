import React from "react";
import styled from "styled-components/native";
import { CustomText } from "../../components/CustomText";

const StyledText = styled(CustomText)`
	padding-top: 30;
	color: ${({ theme }) => theme.color.secondary};
	font-size: 14px;
	text-align: center;
`;

export const TotalTime = ({ children }) => <StyledText>{children}</StyledText>;
