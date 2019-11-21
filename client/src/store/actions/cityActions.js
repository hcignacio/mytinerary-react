export const GET_CITIES = 'GET_CITIES';

const fetchDataCities = (cities) => {
  return {
    type: GET_CITIES,
    cities
  }
}

export const CityAction = async (dispatch) => {
  await fetch("/cities", { method: "GET" })
    .then(response => response.json())
    .then(cities => {
      console.log("cities", cities)
      dispatch(fetchDataCities(cities))
    })
    .catch(err => console.log(err));
}
