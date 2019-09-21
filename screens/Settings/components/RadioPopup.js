import React, { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { StRadio, StPopup, StButton } from '../../../components'

const StyledPopup = styled(StPopup)`
	padding: 20px;
`

const StyledButton = styled(StButton)`
	width: 100%;
	padding: 30px 0;
	align-items: flex-start;
`

export const RadioPopup = ({ values, selected, children, onChange }) => {
	const [visible, setVisible] = useState(false)
	return (
		<View>
			<StyledButton onPress={() => setVisible(true)}>
				{children}
			</StyledButton>
			<StyledPopup
				visible={visible}
				onClose={() => setVisible(false)}
				centered
			>
				<StRadio
					items={values}
					selected={selected}
					onChange={value => {
						setVisible(false)
						onChange(value)
					}}
				/>
			</StyledPopup>
		</View>
	)
}
