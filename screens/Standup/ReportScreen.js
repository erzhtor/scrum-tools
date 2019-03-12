import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { StText } from "../../components";
import { StandupContext } from "./context";
import { StopButton, Table } from "./components";
import { formatMillisToTime } from "./lib/format-millis-to-time";
import { StHeader } from "../../components/StHeader";

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	padding: 0 20px 20px 20px;
	flex: 1;
	justify-content: flex-start;
`;

const StyledStopButton = styled(StopButton)`
	flex: 0.5;
`;

const Tuple = ({ name, value }) => (
	<Table.Row>
		<Table.Item>
			<StText secondary fontSize="16">
				{name}
			</StText>
		</Table.Item>
		<Table.Item flexGrow={0.3}>
			<StText fontSize="16">{value}</StText>
		</Table.Item>
	</Table.Row>
);

const StyledTable = styled(Table)`
	padding-bottom: 50px;
`;

export class ReportScreen extends Component {
	render() {
		return (
			<StandupContext.Consumer>
				{({
					participant = "0",
					millisPerUser,
					totalMillis,
					timeouts = "0",
					started
				}) => {
					const totalMillisStr = formatMillisToTime(totalMillis);
					return (
						<StyledLayout>
							<StHeader centered>Today</StHeader>
							<StyledTable>
								<Tuple name="PARTICIPANTS" value={participant} />
								<Tuple name="TIMEOUTS" value={timeouts} />
								<Tuple
									name="TIME PER PARTICIPANT"
									value={formatMillisToTime(millisPerUser)}
								/>
								<Tuple name="TOTAL TIME" value={totalMillisStr} />
							</StyledTable>
							{started && <StyledStopButton onPress={this.props.onStop} />}
						</StyledLayout>
					);
				}}
			</StandupContext.Consumer>
		);
	}
}
