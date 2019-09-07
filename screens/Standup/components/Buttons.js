import React from 'react'
import styled, { withTheme } from 'styled-components/native'
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

export const StartButton = withTheme(({ theme, ...props }) => {
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
})

export const StopButton = withTheme(({ theme, ...props }) => {
	return (
		<StyledTouchableOpacity {...props}>
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
})
