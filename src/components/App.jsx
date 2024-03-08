import fetchData from "API/Weather";
import { CardsList } from "cards/cardsList/CardsList";
import HeroWrapper from "heroWrapper/HeroWrapper";
import { createContext, useEffect, useState } from "react";
export const contextInput = createContext(null);

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const storageData = localStorage.getItem("weatherCards");
    const parsedStorageData = JSON.parse(storageData);
    if (parsedStorageData) {
      setWeatherData(
        parsedStorageData
      )
    }
  }, [])

  useEffect(() => {
    if (inputValue) {
      fetchData(inputValue).then(data => setWeatherData([data, ...weatherData]));
      localStorage.setItem("weatherCards", JSON.stringify(weatherData))
    }
  }, [inputValue]);
  
  const delStorageData = () => { 
    localStorage.removeItem("weatherData")
  };

  const plusInputValue = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <contextInput.Provider value={{ plusInputValue }}>
        <HeroWrapper />
      </contextInput.Provider>
      {weatherData.length === 0 ? null : 
    <CardsList data={weatherData} delStorageData={delStorageData}/>
}
    </>
  )
}