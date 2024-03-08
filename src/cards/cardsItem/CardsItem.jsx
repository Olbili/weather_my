import { WiDaySunny } from "react-icons/wi";
import React from 'react';
import s from './CardsItem.module.css'
import fetchData from "API/Weather";

export const CardsItem = ({ id, name, main, country, delStorageData }) => { 
const celsius = Math.round(main.temp - 273.15);
  return (
    <li id={id} className={s.card}>
      <div className={s.cardHeader}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{country}</p>
      </div>
      <div className={s.forecastButton}>
        <button className={s.forecastButtonHourly}>Hourly forecast</button>
        <button className={s.forecastButtonWeekly}>Weekly forecast</button>
      </div>
      <div className={s.now}>
        <p className={s.date}>{new Date().toLocaleDateString()}</p>
        <p className={s.day}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
      </div>
      <div className={s.cardBody}>
      {/* <img src="" alt="Weather icon" className={s.weatherIcon} /> */}
        <WiDaySunny className={s.img}/>
        <p className={s.temperature}>{main ? `${celsius} °C` : 'N/A'}</p>
      </div>
      <div className={s.cardActions}>
        <button className={s.reload} onClick={() => (console.log('name', name),fetchData())}>reload</button>
        <button className={s.like}>like</button>
        <button className={s.seeMore}>See more</button>
        <button className={s.del} onClick={() => (delStorageData(), console.log('hello'))}>del</button>
      </div>
    </li>
  );
};

export default CardsItem;

// function kelvinToCelsius(kelvin)

// const celsius = kelvin - 273.15;

// return celsius;
// }


// export const newsRequest = async page => {
//   try {
//   const date = new Date();
//   const options = {
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
//   };
//   const localeString = date.toLocaleString('uk-UA', options);
//   const response = await axios.get(
//   `https://newsapi.org/v2/everything?q=car&apiKey=${API_KEY}&pageSize=4&sortBy=publishedAt&from=${localeString}&page=${page}`
//   );
//   if (response.data.totalResults === 0) {
//   throw new Error('Limit reached');
//   }
//   // if ()
//   return response.data.articles;
//   } catch (error) {
//   console.error('Error fetching news:', error);
//   throw error;
//   }
//   };