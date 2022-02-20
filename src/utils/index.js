import { SIZE_LARGE, SIZE_MEDIUM, SIZE_SMALL, SIZE_XLARGE, SIZE_XSMALL, SIZE_XXLARGE } from "../constants";
const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const Days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const getFontSize = (size) => {
  switch (size) {
    case SIZE_XSMALL: return 9;
    case SIZE_SMALL: return 12;
    case SIZE_MEDIUM: return 16;
    case SIZE_LARGE: return 20;
    case SIZE_XLARGE: return 24;
    case SIZE_XXLARGE: return 32;
    default: return 12;
  }
};

export const getYearFromDate = (date)=>{
  return date.getFullYear()
}

export const getMonthNameFromDate = (date)=>{
  return Months[date.getMonth()]
};

export const getDayFromDate = (date)=>{
  return Days[date.getDay()]
};

export const getDatefromDate = (date)=>{
  return date.getDate()
}

export const formatDateToLocale = (date)=>{
  let newDate = new Date(date)
  return `${newDate.toDateString()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
}