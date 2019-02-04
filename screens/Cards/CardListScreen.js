import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { Card } from "./components";
import { AppContext } from "../../context";
import { QUESTION_CARD, INFINITY_CARD, CUP_CARD } from "../../constants";

const StyledContainer = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export class CardListScreen extends React.Component {
	render() {
		const { onItemClick } = this.props;
		return (
			<AppContext.Consumer>
				{({ cards }) => (
					<React.Fragment>
						{[...cards, QUESTION_CARD, CUP_CARD, INFINITY_CARD].map(item => (
							<Card key={item} onPress={() => onItemClick(item)} item={item} />
						))}
					</React.Fragment>
				)}
			</AppContext.Consumer>
		);
	}
}
