import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledText = styled(Text)`
	font-size: 72;
	font-weight: bold;
`;

export const Timer = ({ children }) => <StyledText>{children}</StyledText>;
