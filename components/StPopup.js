import React from "react";
import { View, Modal } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	opacity: 0.9;
	flex: 1;
	justify-content: center;
`;

export class StPopup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: props.visible
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ visible: nextProps.visible });
	}

	onClose = () => {
		this.setState({ visible: false });
		const { onClose } = this.props;
		onClose && onClose();
	};

	render() {
		const { onClose, children, ...rest } = this.props;
		return (
			<View>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.visible}
					onRequestClose={this.onClose}
				>
					<StyledContainer {...rest}>{children}</StyledContainer>
				</Modal>
			</View>
		);
	}
}
