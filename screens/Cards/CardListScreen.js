import React from "react";
import { Card } from "./components";
import { AppContext } from "../../context";
import { QUESTION_CARD, INFINITY_CARD } from "../../constants";

export class CardListScreen extends React.Component {
	render() {
		const { onItemClick } = this.props;
		return (
			<AppContext.Consumer>
				{({ cards }) => (
					<React.Fragment>
						{[...cards, QUESTION_CARD, INFINITY_CARD].map(item => (
							<Card key={item} onPress={() => onItemClick(item)}>
								{item}
							</Card>
						))}
					</React.Fragment>
				)}
			</AppContext.Consumer>
		);
	}
}
