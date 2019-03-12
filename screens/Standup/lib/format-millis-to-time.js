import { MILLIS_IN_SECOND } from "../../../constants";

const format = value => (value < 10 ? `0${value}` : value);
export const formatMillisToTime = millis => {
	const totalSeconds = millis / MILLIS_IN_SECOND;
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = Math.floor(totalSeconds % 60);
	return `${format(minutes)}:${format(seconds)}`;
};
