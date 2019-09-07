import React from 'react'
import styled from 'styled-components/native'
import { StText } from '../../../components'
import { formatMillisToTime } from '../lib/format-millis-to-time'

const StyledText = styled(StText)`
	padding-top: 30;
	font-size: 14px;
	flex: 1;
`

export const TotalTime = ({ totalMillis }) => (
	<StyledText centered secondary>
		Total Time: {formatMillisToTime(totalMillis)}
	</StyledText>
)
