import React, { useContext } from 'react'
import { FlatGrid } from 'react-native-super-grid'
import Constants from '../../constants/Layout'

import { AppContext } from '../../context'
import { QUESTION_CARD, INFINITY_CARD, CUP_CARD } from '../../constants'
import { Card } from './components'

export const CardListScreen = ({ onItemClick }) => {
	const { cards } = useContext(AppContext)
	return (
		<FlatGrid
			itemDimension={Constants.window.width / 3.5}
			items={[...cards, QUESTION_CARD, CUP_CARD, INFINITY_CARD]}
			contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 40, paddingBottom: 70 }}
			renderItem={({ item }) => (
				<Card
					onPress={() => onItemClick(item)}
					item={item}
				/>
			)}
		/>
	)
}
