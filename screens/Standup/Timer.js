import React from "react";
import styled from "styled-components/native";
import { CustomText } from "../../components/CustomText";

const StyledText = styled(CustomText)`
	font-size: 72;
	font-size: 90px;
	text-align: center;
	color: ${({ theme }) => theme.color.primary};
`;

export const Timer = ({ children }) => <StyledText>{children}</StyledText>;
