import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { StText } from './StText'

const StyledCircle = styled(View)`
	border-width: 1px;
	border-color: ${({ theme }) => theme.color.blue};
	background: ${({ theme, selected }) =>
		selected ? theme.color.blue : theme.color.transparent};
	border-radius: 10.5;
	height: 21;
	width: 21;
	margin: 5px 10px 5px 5px;
`

const StyledLayout = styled(View)`
	align-items: center;
`

const StyledRadioWrapper = styled(View)`
	flex-direction: row;
	align-items: baseline;
	padding: 5px;
`

const RadioButton = ({ label, value, selected, onClick }) => (
	<TouchableOpacity onPress={() => onClick(value)}>
		<StyledRadioWrapper>
			<StyledCircle selected={selected} />
			<StText fontSize="18" secondary={selected}>
				{label}
			</StText>
		</StyledRadioWrapper>
	</TouchableOpacity>
)

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
		const { onChange } = this.props
		onChange && onChange(value)
	}

	render() {
		const { items, selected, ...rest } = this.props
		return (
			<StyledLayout {...rest}>
				<View>
					{items.map(({ label, value }) => (
						<RadioButton
							key={value}
							label={label}
							value={value}
							selected={value === selected}
							onClick={this.onItemClick.bind(this)}
						/>
					))}
				</View>
			</StyledLayout>
		)
	}
}
