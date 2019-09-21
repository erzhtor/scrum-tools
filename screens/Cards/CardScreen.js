import React, { useState, useCallback, useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import * as Animatable from 'react-native-animatable'

import { StText, StPopup } from '../../components'
import { INFINITY_CARD, CUP_CARD, THEME_LIGHT } from '../../constants'

const LargeCard = ({ item }) => {
	const theme = useContext(ThemeContext)

	if (item === CUP_CARD) {
		return (
			<Animatable.Image
				animation="zoomIn"
				style={{ width: '70%', height: '70%', alignSelf: 'center' }}
				resizeMode="contain"
				source={
					theme.name === THEME_LIGHT
						? require('../../assets/images/cup_dark.png')
						: require('../../assets/images/cup_light.png')
				}
			/>
		)
	}

	if (item === INFINITY_CARD) {
		return (
			<Animatable.Image
				style={{ width: '70%', height: '70%', alignSelf: 'center' }}
				resizeMode="contain"
				animation="zoomIn"
				source={
					theme.name === THEME_LIGHT
						? require('../../assets/images/infinity-sign_dark.png')
						: require('../../assets/images/infinity-sign_light.png')
				}
			/>
		)
	}

	return (
		<Animatable.View animation="zoomIn">
			<StText fontSize={item.length > 2 ? 140 : 240} centered>
				{item}
			</StText>
		</Animatable.View>
	)
}

const StyledButton = styled(TouchableOpacity)`
	flex: 1;
	justify-content: center;
`

const StyledText = styled(StText)`
	align-self: center;
`

export const CardScreen = ({ item, onPress }) => {
	const [revealed, setRevealed] = useState(false)
	const handleClick = useCallback(() => revealed ? onPress() : setRevealed(true), [onPress, revealed])

	return (
		<StPopup visible={!!item} onClose={onPress} fullscreen>
			<StyledButton onPress={handleClick}>
				{!revealed && <StyledText>Tap to reveal</StyledText>}
				{revealed && <LargeCard item={item} />}
			</StyledButton>
		</StPopup>
	)
}
