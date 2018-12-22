import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { StText } from "../../components";
import { StandupContext } from "./context";
import { StopButton, Table } from "./components";
import { formatMillisToTime } from "./lib/format-millis-to-time";

const StyledLayout = styled(View)`
	background: ${({ theme }) => theme.color.bg};
	flex: 1;
	padding: 20px;
`;

const StyledHeader = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
	font-size: 24;
	padding: 10px;
`;

const StyledKeyText = styled(StText)`
	color: ${({ theme }) => theme.color.secondary};
	font-size: 16;
`;

const StyledValueText = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
	font-size: 16;
`;

const StyledStopButton = styled(StopButton)`
	flex: 1;
`;

const Tuple = ({ name, value }) => (
	<Table.Row>
		<Table.Item>
			<StyledKeyText>{name}</StyledKeyText>
		</Table.Item>
		<Table.Item flexGrow={0.3}>
			<StyledValueText>{value}</StyledValueText>
		</Table.Item>
	</Table.Row>
);

export class ReportScreen extends Component {
	render() {
		return (
			<StandupContext.Consumer>
				{({
					onStop,
					participant = "0",
					millisPerUser,
					totalMillis,
					preparationTime,
					timeouts = "0"
				}) => {
					const totalMillisStr = formatMillisToTime(totalMillis);
					return (
						<StyledLayout>
							<StyledHeader centered>Today</StyledHeader>
							<Table>
								<Tuple name="PARTICIPANTS" value={participant} />
								<Tuple name="TIMEOUTS" value={timeouts} />
								<Tuple
									name="PREPARATION TIME"
									value={preparationTime || totalMillisStr}
								/>
								<Tuple
									name="TIME PER PARTICIPANT"
									value={formatMillisToTime(millisPerUser)}
								/>
								<Tuple name="TOTAL TIME" value={totalMillisStr} />
							</Table>
							<StyledStopButton onPress={onStop} />
						</StyledLayout>
					);
				}}
			</StandupContext.Consumer>
		);
	}
}
