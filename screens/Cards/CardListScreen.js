import React, { useContext, useMemo } from 'react'
import { View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import Constants from '../../constants/Layout'

import { AppContext } from '../../context'
import { QUESTION_CARD, INFINITY_CARD, CUP_CARD } from '../../constants'
import { Card } from './components'

export const CardListScreen = ({ onItemClick }) => {
	const { cards } = useContext(AppContext)
	const itemDimension = useMemo(() => Constants.window.width / 3.5, [])
	return (
		<View>
			<FlatGrid
				itemDimension={itemDimension}
				items={[...cards, QUESTION_CARD, CUP_CARD, INFINITY_CARD]}
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
				renderItem={({ item }) => (
					<Card
						onPress={() => onItemClick(item)}
						item={item}
					/>
				)}
			/>
		</View>
	)
}
