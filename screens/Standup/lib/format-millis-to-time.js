import {MILLIS_IN_SECOND} from '../constants';

export const formatMillisToTime = (millis) => {
  const value = Math.floor(millis / MILLIS_IN_SECOND);
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  const format = (value) => {
    if (value < 10){
      return `0${value}`;
    }
    return value;
  } 
  return `${format(minutes)}:${format(seconds)}`;   
}