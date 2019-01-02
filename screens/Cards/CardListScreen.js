import React from "react";
import { Card } from "./components";
import { AppContext } from "../../context";

export class CardListScreen extends React.Component {
	render() {
		return (
			<AppContext.Consumer>
				{({ cards }) => (
					<React.Fragment>
						{[...cards, "?"].map(item => (
							<Card key={item} onPress={() => this.props.onItemClick(item)}>
								{item}
							</Card>
						))}
					</React.Fragment>
				)}
			</AppContext.Consumer>
		);
	}
}
