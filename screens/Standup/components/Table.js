import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const StyledRow = styled(View)`
	display: flex;
	align-items: center;
	flex-direction: row;
	padding-bottom: 20px;
`;

const StyledItem = styled(View)`
	flex: ${({ flexGrow = 1 }) => flexGrow};
`;

const StyledContainer = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Table = ({ children, ...rest }) => (
	<StyledContainer {...rest}>{children}</StyledContainer>
);

Table.Row = StyledRow;
Table.Item = StyledItem;
