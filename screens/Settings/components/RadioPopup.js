import React, { Component } from "react";
import { View } from "react-native";

import { StRadio, StPopup } from "../../../components";
import { SquareButton } from "./SquareButton";
import styled from "styled-components/native";

const StyledPopup = styled(StPopup)``;
export class RadioPopup extends Component {
	state = {
		visible: false
	};

	render() {
		const { values, selected, children, onChange } = this.props;
		return (
			<View>
				<SquareButton onPress={() => this.setState({ visible: true })}>
					{children}
				</SquareButton>
				<StyledPopup
					visible={this.state.visible}
					onClose={() => this.setState({ visible: false })}
					centered
				>
					<StRadio
						items={values}
						selected={selected}
						onChange={value => {
							this.setState({ visible: false });
							onChange(value);
						}}
					/>
				</StyledPopup>
			</View>
		);
	}
}
