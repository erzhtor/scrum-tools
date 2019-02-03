import styled from "styled-components";
import { StButton } from "../../../components";

export const SquareButton = styled(StButton)`
	width: 127px;
	height: 127px;
	border-radius: 22px;
	${({ theme, blue }) => (blue ? `border-color: ${theme.color.blue}` : "")};
`;
