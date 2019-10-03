import styled from 'styled-components'
import Constants from 'expo-constants'
import { StText } from './StText'

export const StHeader = styled(StText)`
	font-size: 24px;
	background: ${({ theme }) => theme.color.bg};
	padding: ${Constants.statusBarHeight || 28}px;
`
