import React from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const StyledContainer = styled(TouchableOpacity)`
	background: ${({ theme }) => theme.color.popup};
	flex: 1;
	${({ centered }) =>
		centered
			? `
		justify-content: center;
		align-items: center;`
			: ''}
`

const StyledWrapper = styled(TouchableOpacity)`
	background: ${({ theme }) => theme.color.bg};
	${({ fullscreen }) =>
		fullscreen
			? `
			flex: 1;
			width: 100%;
			height: 100%;
			`
			: `
		position: absolute;
		border-radius: 6px;
		padding: 10px;
	`};
`

export class StPopup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: props.visible
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ visible: nextProps.visible })
	}

	onClose = () => {
		this.setState({ visible: false })
		const { onClose } = this.props
		onClose && onClose()
	};

	render() {
		const { centered, fullscreen, children, ...rest } = this.props
		return (
			<View>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.visible}
					onRequestClose={this.onClose}
				>
					<StyledContainer
						activeOpacity={1}
						centered={centered}
						onPress={this.onClose}
					>
						<StyledWrapper fullscreen={fullscreen} {...rest} activeOpacity={1}>
							{children}
						</StyledWrapper>
					</StyledContainer>
				</Modal>
			</View>
		)
	}
}
