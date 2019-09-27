import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import styled, { ThemeProvider } from 'styled-components/native'
import * as Sentry from 'sentry-expo'
import Constants from 'expo-constants'

import AppNavigator from './navigation/AppNavigator'
import { AppContext } from './context'
import {
	getCardPattern,
	setCardPattern,
	setTheme,
	getTheme
} from './lib/storage'
import { Cards, DarkTheme, LightTheme, THEME_DARK } from './constants'
import { StSpinner } from './components'

const StyledLayout = styled(View)`
	flex: 1;
	background: ${({ theme }) => theme.color.bg};
`

Sentry.init({
	dsn: 'https://6415e28a897c4ba2b2f2128205dd0c9b@sentry.io/1757501',
	enableInExpoDevelopment: false,
	debug: false
})

Sentry.setRelease(Constants.manifest.revisionId)

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.initCards = this.initCards.bind(this)
		this.initTheme = this.initTheme.bind(this)
		this.onCardPatternChange = this.onCardPatternChange.bind(this)
		this.onThemeChange = this.onThemeChange.bind(this)
		this.state = {
			isLoadingComplete: false,
			loading: true
		}
	}

	async componentDidMount() {
		await this.initCards()
		await this.initTheme()
	}

	async initCards() {
		const cardPattern = await getCardPattern()
		this.setState({
			loading: false
		})
		this.onCardPatternChange(cardPattern)
	}

	async initTheme() {
		const themeKey = await getTheme()
		this.setState({
			themeKey
		})
	}

	async onCardPatternChange(value) {
		const cardKey = Object.keys(Cards).find(key => Cards[key].name === value)

		this.setState({
			cards: Cards[cardKey].value,
			cardPattern: value
		})
		await setCardPattern(value)
	}

	async onThemeChange(value) {
		this.setState({
			themeKey: value
		})
		await setTheme(value)
	}

	render() {
		const {
			isLoadingComplete,
			loading,
			cards,
			cardPattern,
			themeKey
		} = this.state
		if (!isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			)
		}
		const isDarkTheme = themeKey === THEME_DARK
		return (
			<AppContext.Provider
				value={{
					cards,
					cardPattern,
					onCardPatternChange: this.onCardPatternChange,
					themeKey,
					onThemeChange: this.onThemeChange
				}}
			>
				<ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
					<StyledLayout>
						{Platform.OS === 'ios' && (
							<StatusBar
								barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
							/>
						)}
						{!loading && <AppNavigator />}
						{loading && <StSpinner />}
					</StyledLayout>
				</ThemeProvider>
			</AppContext.Provider>
		)
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
				require('./assets/images/robot-dev.png'),
				require('./assets/images/robot-prod.png')
			]),
			Font.loadAsync({
				// This is the font that we are using for our tab bar
				// ...Icon.Ionicons.font,
				// We include SpaceMono because we use it in HomeScreen.js. Feel free
				// to remove this if you are not using it in your app
				'Slim Joe': require('./assets/fonts/SlimJoe.otf'),
				'Big John': require('./assets/fonts/BigJohn.otf')
			})
		])
	};

	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error)
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true })
	};
}
