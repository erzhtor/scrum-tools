import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { StRadio, StPopup, StButton } from "../../../components";

const StyledPopup = styled(StPopup)`
	padding: 20px;
`;

const StyledButton = styled(StButton)`
	margin: 30px 0;
	padding: 0;
`;

export class RadioPopup extends Component {
	state = {
		visible: false
	};

	render() {
		const { values, selected, children, onChange } = this.props;
		return (
			<View>
				<StyledButton onPress={() => this.setState({ visible: true })}>
					{children}
				</StyledButton>
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
