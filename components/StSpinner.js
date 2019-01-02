import React from "react";
import styled from "styled-components/native";
import { StText } from "./StText";

const StyledText = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
`;

export const StSpinner = () => {
	return <StyledText>Loading ...</StyledText>;
};
