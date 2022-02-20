import {
  getDatefromDate,
  getDayFromDate,
  getMonthNameFromDate,
  getYearFromDate,
} from '../../../utils';
import {
  getAvgMileage,
  getLastEntryMessage,
  getLastFuelPrice,
  getLastMileage,
  getRecentCosts,
} from '../../utils';

export const getGasSummary = ({ refuel: { data } }) => {
  return {
    avgFuelConsumption: getAvgMileage(data) || 0,
    lastFuelConsumption: getLastMileage(data) || 0,
    lastFuelPrice: getLastFuelPrice(data) || 0,
    lastEntryMessage: getLastEntryMessage(data) || '',
  };
};

export const getCostsSummary = ({ refuel: { data } }) => {
  let entries = getRecentCosts(data);
  return {
    currentMonth: entries[0],
    previousMonth: entries[1],
  };
};

export const getLastEntries = ({ refuel: { data } }) => {
  const getDateString = (date) => {
    let d = new Date(date);
    return `${getMonthNameFromDate(d)} ${getYearFromDate(d)}`;
  };
  const getData = (data) => {
    return {
      date: getDateString(data.date),
      message: 'Refueling',
      amount: (parseFloat(data.price) * parseFloat(data.gas)).toFixed(3),
    };
  };
  switch (data.length) {
    case 0:
      return [];
    case 1:
      return [data[0]].map(getData);
    default:
      return [data[0], data[1]].map(getData);
  }
};

export const getTimelineSectionData = ({ refuel: { data } }) => {
  let result = {};
  let keys = [];
  let getKey = (date) => {
    return `${getMonthNameFromDate(date)}-${getYearFromDate(date)}`;
  };
  for (let i = 0; i < data.length; i++) {
    let dateObj = new Date(data[i].date);
    let key = getKey(dateObj);

    if (!result[key]) {
      keys.push(key);
      result[key] = [];
    }
    result[key].push({
      odometer: data[i].odometer,
      date: `${getDayFromDate(dateObj)}, ${getDatefromDate(dateObj)}`,
      amount: (parseFloat(data[i].gas) * parseFloat(data[i].price)).toFixed(3),
    });
  }
  return keys.map((k) => ({
    title: k.replace('-', ' '),
    data: result[k],
  }));
};
