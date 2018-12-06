import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const StyledView = styled(View)`
	padding-top: 30;
`;

export const TotalTime = ({ children }) => (
	<StyledView>
		<Text>{children}</Text>
	</StyledView>
);
