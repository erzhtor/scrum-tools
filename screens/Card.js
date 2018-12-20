import React from "react";
import { ScrollView, View, Text } from "react-native";
import styled from "styled-components/native";

const StyledCard = styled(View)`
	width: 80px;
	height: 80px;
	margin: 10px;
	background-color: black;
	align-content: center;
`;

const StyledLayout = styled(View)`
	flex: 1;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: center;
`;

const StyledText = styled(Text)`
	color: white;
	font-weight: bold;
	font-size: 48px;
	text-align: center;
`;

const STANDARD_CARDS = [0, "1/2", 1, 2, 3, 5, 8, 13, 20, 40, "?"];

export default class CardsScreen extends React.Component {
	static navigationOptions = {
		title: null,
		header: null
	};

	render() {
		return (
			<ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
				<StyledLayout>
					{STANDARD_CARDS.map(item => (
						<StyledCard key={item}>
							<StyledText>{item}</StyledText>
						</StyledCard>
					))}
				</StyledLayout>
			</ScrollView>
		);
	}
}
