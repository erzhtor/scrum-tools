import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export const StText = styled(Text)`
	font-family: ${({ slim }) => (slim ? "Slim Joe" : "Big John")};
	${({ centered }) => (centered ? "text-align: center" : "")};
	${({ fontSize }) => (fontSize ? `font-size: ${fontSize}` : "")};
`;
