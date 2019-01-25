import React, { Component } from "react";
import { View } from "react-native";

import { StRadio, StPopup } from "../../components";
import { THEME_DARK, THEME_LIGHT } from "../../constants";
import { AppContext } from "../../context";
import { SquareButton } from "./components/SquareButton";

const RADIO_ITEMS = [
	{ label: "LIGHT", value: THEME_LIGHT },
	{ label: "DARK", value: THEME_DARK }
];

export class ThemeSettings extends Component {
	state = {
		isModalVisible: false
	};

	render() {
		return (
			<AppContext.Consumer>
				{({ onThemeChange, themeKey }) => (
					<View>
						<SquareButton
							onPress={() => this.setState({ isModalVisible: true })}
						>
							Theme
						</SquareButton>
						<StPopup visible={this.state.isModalVisible}>
							<StRadio
								items={RADIO_ITEMS}
								selected={themeKey}
								onChange={value => {
									this.setState({ isModalVisible: false });
									onThemeChange(value);
								}}
							/>
						</StPopup>
					</View>
				)}
			</AppContext.Consumer>
		);
	}
}
