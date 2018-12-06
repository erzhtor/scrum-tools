import React from "react";
import { Text, View } from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class StatsScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<View>
				<MonoText>Hi from Stats</MonoText>
			</View>
		);
	}

	_maybeRenderDevelopmentModeWarning() {
		if (__DEV__) {
			const learnMoreButton = (
				<Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
					Learn more
				</Text>
			);

			return (
				<Text style={styles.developmentModeText}>
					Development mode is enabled, your app will be slower but you can use
					useful development tools. {learnMoreButton}
				</Text>
			);
		} else {
			return (
				<Text style={styles.developmentModeText}>
					You are not in development mode, your app will run at full speed.
				</Text>
			);
		}
	}

	_handleLearnMorePress = () => {
		WebBrowser.openBrowserAsync(
			"https://docs.expo.io/versions/latest/guides/development-mode"
		);
	};

	_handleHelpPress = () => {
		WebBrowser.openBrowserAsync(
			"https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
		);
	};
}
