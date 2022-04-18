import React, { Component } from "react";

// import Geocoder from "react-geonames";
import GeonamesSelector from "./GeonamesSelector";

// Importing additional styles
// import "react-geonames/dist/geonames.css";
import "../styles/geocodenames.css";

const queryParams = {
  type: "json",
  maxRows: 5,
  // featureCode: "PPLA2",
  // featureCode: "PPL",
  // featureCode: "PPLA",
};

class LocationSelector extends Component {
  state = {
    viewport: {
      width: 700,
      height: 500,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 10,
    },
    place: {},
  };

  onSelect = (place, placename) => {
    this.setState((prevState) => ({
      viewport: {
        ...prevState.viewport,
        latitude: +place.lat,
        longitude: +place.lng,
        zoom: 10,
      },
      place: {
        latitude: +place.lat,
        longitude: +place.lng,
        placename: placename,
      },
    }));
  };

  onClear = () => {
    this.setState({ place: {} });
  };

  render() {
    return (
      <div>
        <GeonamesSelector
          username="prefaze"
          https
          queryParams={queryParams}
          placeholder="Where are you dancing?"
          onSelect={this.onSelect}
          onClear={this.onClear}
          label="Location"
        />
      </div>
    );
  }
}

export default LocationSelector;
