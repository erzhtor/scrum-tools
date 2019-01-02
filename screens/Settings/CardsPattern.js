import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { StRadio, StText, StSpinner } from "../../components";
import { Cards } from "../../constants";
import { AppContext } from "../../context";

const StyledLayout = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

const RADIO_ITEMS = [
	{ label: "STANDARD", value: Cards.STANDARD.name },
	{ label: "T-SHIRT", value: Cards.T_SHIRT.name },
	{ label: "FIBONACCI", value: Cards.FIBONACCI.name }
];

const StyledCard = styled(View)`
	width: 127px;
	height: 127px;
	border-radius: 22px;
	border: 1px solid ${({ theme }) => theme.color.blue};
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const StyledText = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
`;

const StyledWrapper = styled(View)``;

export class CardsPattern extends Component {
	render() {
		return (
			<AppContext.Consumer>
				{({ onCardPatternChange, cardPattern }) => (
					<StyledLayout>
						<StyledWrapper>
							<StyledCard>
								<StyledText centered fontSize={18}>
									{"CARDS'\nPATTERN"}
								</StyledText>
							</StyledCard>
						</StyledWrapper>
						<StyledWrapper>
							<StRadio
								items={RADIO_ITEMS}
								selected={cardPattern}
								onChange={onCardPatternChange}
							/>
						</StyledWrapper>
					</StyledLayout>
				)}
			</AppContext.Consumer>
		);
	}
}
