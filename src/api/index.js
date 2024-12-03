const baseURL = "https://api.weatherapi.com/v1/current.json?key=425e62f860a6484aae5121213240312"

export const getWeatherDataForCity = async (city) => {
     const response = await fetch(`${baseURL}&q=${city}$aqi=yes`)
     return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
     const response = await fetch(`${baseURL}&q=${lat}, ${lon} $aqi=yes`)
     return await response.json();
};