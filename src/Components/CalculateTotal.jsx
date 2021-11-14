import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import {list} from '../Components/List';

let periods = [
    {price_per_day: 2, from: "2020-01-01", to: "2020-01-04", added: "2019-06-01"},
    {price_per_day: 60, from: "2020-01-03", to: "2020-01-08", added: "2019-06-02"},
    {price_per_day: 15, from: "2020-01-05", to: "2020-01-06", added: "2019-06-01"},
    {price_per_day: 150, from: "2020-01-08", to: "2020-01-15", added: "2019-06-15"}
];


  function CalculateTotal (startDate, endDate) {


      periods.sort((a, b) => a.added.localeCompare(b.added));
      let pricePerDay = {};
      periods.forEach(period => {
          let date = new Date(period.from);
          while (date <= new Date(period.to)) {
            let  dateStr = date.toISOString().split('T')[0];
              pricePerDay[dateStr] = period.price_per_day;
              // add day
              date.setDate(date.getDate() + 1);
          }
      });
      // calculate price
      let price = 0;
      let date = new Date(startDate);
      while (date <= new Date(endDate)) {
        let  dateStr = date.toISOString().split('T')[0];
        let defaultPrice = 5;
          let currentPrice = defaultPrice;
          if (dateStr in pricePerDay) {
              currentPrice = pricePerDay[dateStr];
          }
          price += currentPrice;
          // add day
          date.setDate(date.getDate() + 1);
      }

      return (
        price

      );
  }


export default CalculateTotal;
