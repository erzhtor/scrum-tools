import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import Constants from 'expo-constants'

import { CardListScreen } from './CardListScreen'
import { CardScreen } from './CardScreen'

const StyledLayout = styled(View)`
	flex: 1;
	flex-direction: row;
	flex-wrap: wrap;
	background-color: ${({ theme }) => theme.color.bg};
	justify-content: center;
	align-content: center;
	padding-top: ${Constants.statusBarHeight || 28}px;
`

const CardsScreen = () => {
	const [selected, setSelected] = useState(null)
	const handleClick = useCallback(item => setSelected(item), [])
	const handleClear = useCallback(() => setSelected(null), [])
	return (
		<StyledLayout>
			{!selected && <CardListScreen onItemClick={handleClick} />}
			{selected && <CardScreen onPress={handleClear} item={selected} />}
		</StyledLayout>
	)
}

export default CardsScreen
