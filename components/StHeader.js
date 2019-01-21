import styled from "styled-components";
import { StText } from "./StText";

export const StHeader = styled(StText)`
	color: ${({ theme }) => theme.color.primary};
	font-size: 24px;
	background: ${({ theme }) => theme.color.bg};
	padding: 28px;
`;
