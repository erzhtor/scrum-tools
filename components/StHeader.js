import { StatusBar } from 'react-native'
import styled from 'styled-components'
import { StText } from './StText'

export const StHeader = styled(StText)`
	font-size: 24px;
	background: ${({ theme }) => theme.color.bg};
	padding: ${StatusBar.currentHeight || 28}px;
`
