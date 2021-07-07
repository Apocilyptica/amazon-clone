import React from "react";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

geocodeByAddress("Montevideo, Uruguay")
  .then((results) => getLatLng(results[0]))
  .then(({ lat, lng }) => console.log("Successfully got latitude and longitude", { lat, lng }));

const GoogleMap = () => {
  return <div>{/* <GooglePlacesAutocomplete apiKey="AIzaSyBVqjtCOhekOTUISoWnjyNSFjjgrE3ok4w" /> */}</div>;
};

export default GoogleMap;
