import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View } from "react-native";
import { StText } from "./StText";
import styled from "styled-components/native";

const StyledCircle = styled(View)`
	border-width: 1px;
	border-color: ${({ theme }) => theme.color.blue};
	background: ${({ theme, selected }) =>
		selected ? theme.color.blue : theme.color.transparent};
	border-radius: 10.5;
	height: 21;
	width: 21;
	margin: 3px;
`;

const StyledLayout = styled(View)`
	flex: 1;
	align-items: flex-start;
	justify-content: flex-start;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
	flex: 1;
	flex-direction: row;
	align-items: center;
	max-height: 60px;
`;

const StyledText = styled(StText)`
	margin: 0;
	font-size: 18px;
	color: ${({ theme, selected }) =>
		selected ? theme.color.secondary : theme.color.primary};
`;

const RadioButton = ({ label, value, selected, onClick }) => (
	<StyledTouchableOpacity onPress={() => onClick(value)}>
		<StyledCircle selected={selected} />
		<StyledText selected={selected}>{label}</StyledText>
	</StyledTouchableOpacity>
);

export class StRadio extends Component {
	static propTypes = {
		items: PropTypes.arrayOf(
			PropTypes.shape({
				label: PropTypes.any.isRequired,
				value: PropTypes.any.isRequired
			})
		),
		selected: PropTypes.any,
		onChange: PropTypes.func
	};

	onItemClick(value) {
		const { onChange } = this.props;
		onChange && onChange(value);
	}

	render() {
		const { items, selected } = this.props;
		return (
			<StyledLayout>
				{items.map(({ label, value }) => (
					<RadioButton
						key={value}
						label={label}
						value={value}
						selected={value === selected}
						onClick={this.onItemClick.bind(this)}
					/>
				))}
			</StyledLayout>
		);
	}
}
