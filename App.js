import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import styled, { ThemeProvider } from "styled-components/native";

import AppNavigator from "./navigation/AppNavigator";
import { AppContext } from "./context";
import {
	getCardPattern,
	setCardPattern,
	setTheme,
	getTheme
} from "./lib/storage";
import { Cards, DARK_THEME, LIGHT_THEME } from "./constants";
import { StSpinner } from "./components";
import { THEME_DARK } from "./screens/Standup/constants";

const StyledLayout = styled(View)`
	flex: 1;
	background: ${({ theme }) => theme.color.bg};
`;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.initCards = this.initCards.bind(this);
		this.initTheme = this.initTheme.bind(this);
		this.onCardPatternChange = this.onCardPatternChange.bind(this);
		this.onThemeChange = this.onThemeChange.bind(this);
		this.state = {
			isLoadingComplete: false,
			loading: true
		};
	}

	async componentDidMount() {
		await this.initCards();
		await this.initTheme();
	}

	async initCards() {
		const cardPattern = await getCardPattern();
		this.setState({
			loading: false
		});
		this.onCardPatternChange(cardPattern);
	}

	async initTheme() {
		const themeKey = await getTheme();
		this.setState({
			themeKey
		});
	}

	async onCardPatternChange(value) {
		const cardKey = Object.keys(Cards).find(key => Cards[key].name === value);

		this.setState({
			cards: Cards[cardKey].value,
			cardPattern: value
		});
		await setCardPattern(value);
	}

	async onThemeChange(value) {
		this.setState({
			themeKey: value
		});
		await setTheme(value);
	}

	render() {
		const {
			isLoadingComplete,
			loading,
			cards,
			cardPattern,
			themeKey
		} = this.state;
		if (!isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
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
					<ThemeProvider
						theme={themeKey === THEME_DARK ? DARK_THEME : LIGHT_THEME}
					>
						<StyledLayout>
							{Platform.OS === "ios" && <StatusBar barStyle="default" />}
							{!loading && <AppNavigator />}
							{loading && <StSpinner />}
						</StyledLayout>
					</ThemeProvider>
				</AppContext.Provider>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
				require("./assets/images/robot-dev.png"),
				require("./assets/images/robot-prod.png")
			]),
			Font.loadAsync({
				// This is the font that we are using for our tab bar
				...Icon.Ionicons.font,
				// We include SpaceMono because we use it in HomeScreen.js. Feel free
				// to remove this if you are not using it in your app
				"Slim Joe": require("./assets/fonts/SlimJoe.otf"),
				"Big John": require("./assets/fonts/BigJohn.otf")
			})
		]);
	};

	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}
