import React from 'react'
import { Switch, View } from 'react-native'
import styled, { withTheme } from 'styled-components/native'

import { THEME_DARK, THEME_LIGHT } from '../../constants'
import { AppContext } from '../../context'
import { StText } from '../../components'

const StyledSection = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	margin: 30px 0;
	align-items: center;
`

const StyledSwitch = styled(Switch)`
	padding: 0;
	margin: 0;
`

export const ThemeSettings = withTheme(({ theme }) => (
	<AppContext.Consumer>
		{({ onThemeChange, themeKey }) => (
			<StyledSection>
				<StText>Dark Theme</StText>
				<StyledSwitch
					onValueChange={darkThemeOn =>
						onThemeChange(darkThemeOn ? THEME_DARK : THEME_LIGHT)
					}
					value={themeKey === THEME_DARK}
					thumbColor={theme.color.blue}
					trackColor={{ true: theme.color.switchTintOn }}
				/>
			</StyledSection>
		)}
	</AppContext.Consumer>
))
