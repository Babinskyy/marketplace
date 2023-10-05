import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

type MapType = {
  country: string | undefined;
};

const Map = (props: MapType) => {
  const countrySwitch = (country: string | undefined) => {
    switch (country) {
      case "Great":
        return { lat: 53, lng: -2 };
      case "Spain":
        return { lat: 40, lng: -4 };
      case "Italy":
        return { lat: 43, lng: 12 };
      case "Germany":
        return { lat: 50, lng: 10 };
      case "France":
        return { lat: 47, lng: 3 };
      case "Switzerland":
        return { lat: 47, lng: 8 };
      case "Poland":
        return { lat: 52, lng: 19 };
      case "Austria":
        return { lat: 47.5, lng: 14 };
      case "Netherlands":
        return { lat: 52, lng: 5.4 };
      default:
        return { lat: 53, lng: -7.8 };
    }
  };

  const center = useMemo(() => countrySwitch(props.country), []);
  console.log(center);
  return (
    <GoogleMap
      zoom={5}
      center={center}
      mapContainerStyle={{
        height: "300px",
        width: "300px",
        borderRadius: "10px",
        margin: "10px 0",
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
