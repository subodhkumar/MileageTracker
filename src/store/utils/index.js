export const getRecentCosts = (data) => {
  let result = [
    {
      gas: 0,
      other: 0,
    },
    {
      gas: 0,
      other: 0,
    },
  ];
  let curDate = new Date(Date.now());
  let curMonth = curDate.getMonth();
  let prevMonth = curMonth === 0 ? 11 : curMonth - 1;
  let curYear = curDate.getFullYear();
  let prevYear = curMonth === 0 ? curYear - 1 : curYear;
  let isCurMonth = (date) => {
    let d = new Date(date);
    return d.getMonth() === curMonth && d.getFullYear() === curYear;
  };
  let isPrevMonth = (date) => {
    let d = new Date(date);
    return d.getMonth() === prevMonth && d.getFullYear() === prevYear;
  };
  let gasCost;
  let i = 0;
  while (i < data.length) {
    let { gas, price, date } = data[i];
    if (isCurMonth(date)) {
      gasCost = parseFloat(gas) * parseFloat(price);
      result[0].gas += parseFloat(gasCost);
    } else if (isPrevMonth(date)) {
      gasCost = parseFloat(gas) * parseFloat(price);
      result[1].gas += parseFloat(gasCost);
    } else {
      break;
    }
    i++;
  }

  return result;
};

export const getTotalFuel = (data) => {
  let tf = 0;
  for (let i = 1; i < data.length; i++) {
    tf += parseFloat(data[i].gas);
  }
  return tf;
};

export const getAvgMileage = (data) => {
  if (data.length) {
    let td = data[0].odometer;
    let tf = getTotalFuel(data);
    if (tf == 0) {
      return 0;
    } else {
      return (td / tf).toFixed(3);
    }
  } else {
    return 0;
  }
};

export const getLastMileage = (data) => {
  if (data.length < 2) {
    return 0;
  } else {
    let distance = data[0].odometer - data[1].odometer;
    let gas = data[1].gas;
    return (distance / gas).toFixed(3);
  }
};

export const getLastFuelPrice = (data) => {
  if (data.length) {
    return data[0].price;
  }
  return 0;
};

export const getLastEntryMessage = (data) => {
  if (data.length) {
    const perDay = 1000*60*60*24 ;
    let dtDate = new Date(data[0].date);
    let curDate = new Date(Date.now());
    let diff = parseInt((curDate - dtDate) / perDay);
    return `${dtDate.toLocaleDateString()} - ${diff.toString()} day${(diff>1 ?'s':'')} ago`;
  }
  return "*";
};
