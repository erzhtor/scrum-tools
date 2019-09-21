import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { Image, TouchableOpacity } from 'react-native'
import { THEME_LIGHT } from '../../../constants'

const StyledImage = styled(Image)`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	resize-mode: contain;
`

const StyledTouchableOpacity = styled(TouchableOpacity)`
	align-items: center;
	padding: 10px;
	padding-bottom: 30px;
	justify-content: center;
`

export const StartButton = props => {
	const theme = useContext(ThemeContext)
	return (
		<StyledTouchableOpacity {...props}>
			<StyledImage
				size={108}
				source={
					theme.name === THEME_LIGHT
						? require('../../../assets/images/btn-start_light.png')
						: require('../../../assets/images/btn-start.png')
				}
			/>
		</StyledTouchableOpacity>
	)
}

export const StopButton = props => {
	const theme = useContext(ThemeContext)
	return (
		<StyledTouchableOpacity {...props} style={{ flex: 0.5 }}>
			<StyledImage
				size={80}
				source={
					theme.name === THEME_LIGHT
						? require('../../../assets/images/btn-stop_light.png')
						: require('../../../assets/images/btn-stop.png')
				}
			/>
		</StyledTouchableOpacity>
	)
}
