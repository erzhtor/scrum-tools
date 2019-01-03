import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

import { CardListScreen } from "./CardListScreen";
import { CardScreen } from "./CardScreen";

const StyledLayout = styled(View)`
	flex: 1;
	flex-direction: row;
	flex-wrap: wrap;
	background-color: ${({ theme }) => theme.color.bg};
	justify-content: space-around;
	align-content: center;
`;

export default class CardsScreen extends React.Component {
	static navigationOptions = {
		title: null,
		header: null
	};

	state = {};

	onItemClick(item) {
		this.setState({ selected: item });
	}

	render() {
		const { selected } = this.state;
		return (
			<ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
				<StyledLayout>
					{!selected && (
						<CardListScreen onItemClick={this.onItemClick.bind(this)} />
					)}
					{selected && (
						<CardScreen onPress={() => this.setState({ selected: null })}>
							{selected}
						</CardScreen>
					)}
				</StyledLayout>
			</ScrollView>
		);
	}
}
