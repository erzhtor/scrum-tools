import React from 'react'
import { FlatGrid } from 'react-native-super-grid'

import { AppContext } from '../../context'
import { QUESTION_CARD, INFINITY_CARD, CUP_CARD } from '../../constants'
import { Card } from './components'

export class CardListScreen extends React.Component {
	render() {
		const { onItemClick } = this.props
		return (
			<AppContext.Consumer>
				{({ cards }) => (
					<FlatGrid
						itemDimension={100}
						items={[...cards, QUESTION_CARD, CUP_CARD, INFINITY_CARD]}
						contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
						renderItem={({ item }) => (
							<Card
								onPress={() => onItemClick(item)}
								item={item}
							/>
						)}
					/>
				)}
			</AppContext.Consumer>
		)
	}
}
