import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import styled, { ThemeProvider } from "styled-components/native";

import DefaultTheme from "./themes/default";
import AppNavigator from "./navigation/AppNavigator";
import { AppContext } from "./context";
import { getCardPattern, setCardPattern } from "./lib/storage";
import { Cards } from "./constants";
import { StSpinner } from "./components";

const StyledLayout = styled(View)`
	flex: 1;
	background: ${({ theme }) => theme.color.bg};
`;

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
		loading: true
	};

	async componentDidMount() {
		const cardPattern = await getCardPattern();
		this.setState({
			loading: false
		});
		this.onCardPatternChange(cardPattern);
	}

	async onCardPatternChange(value) {
		const cardKey = Object.keys(Cards).find(key => Cards[key].name === value);

		this.setState({
			cards: Cards[cardKey].value,
			cardPattern: value
		});
		await setCardPattern(value);
	}

	render() {
		const { isLoadingComplete, loading, cards, cardPattern } = this.state;
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
				<ThemeProvider theme={DefaultTheme}>
					<AppContext.Provider
						value={{
							cards,
							cardPattern,
							onCardPatternChange: this.onCardPatternChange.bind(this)
						}}
					>
						<StyledLayout>
							{Platform.OS === "ios" && <StatusBar barStyle="default" />}
							{!loading && <AppNavigator />}
							{loading && <StSpinner />}
						</StyledLayout>
					</AppContext.Provider>
				</ThemeProvider>
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
