import React, { Component } from "react";
import { View } from "react-native";

import { StRadio, StPopup } from "../../components";
import { Cards } from "../../constants";
import { AppContext } from "../../context";
import { SquareButton } from "./components/SquareButton";

const RADIO_ITEMS = [
	{ label: "STANDARD", value: Cards.STANDARD.name },
	{ label: "T-SHIRT", value: Cards.T_SHIRT.name },
	{ label: "FIBONACCI", value: Cards.FIBONACCI.name }
];

export class CardSettings extends Component {
	state = {
		isModalVisible: false
	};

	render() {
		return (
			<AppContext.Consumer>
				{({ onCardPatternChange, cardPattern }) => (
					<View>
						<SquareButton
							onPress={() => this.setState({ isModalVisible: true })}
						>
							Cards' pattern
						</SquareButton>
						<StPopup visible={this.state.isModalVisible}>
							<StRadio
								items={RADIO_ITEMS}
								selected={cardPattern}
								onChange={value => {
									this.setState({ isModalVisible: false });
									onCardPatternChange(value);
								}}
							/>
						</StPopup>
					</View>
				)}
			</AppContext.Consumer>
		);
	}
}
