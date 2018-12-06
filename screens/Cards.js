import React from "react";
import { ScrollView } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class CardsScreen extends React.Component {
	static navigationOptions = {
		title: "Links"
	};

	render() {
		return (
			<ScrollView>
				{/* Go ahead and delete ExpoLinksView and replace it with your
				 * content, we just wanted to provide you with some helpful links */}
				<ExpoLinksView />
			</ScrollView>
		);
	}
}
