import React from 'react';
import styles from './Map.module.css';
import mapStyle from './map-style';

const Map = ({lat, lng, zoom}) => {
  const mapDiv = React.createRef();

  if (lat && lng) {
    const location = {lat, lng};
    const map = new window.google.maps.Map(
      mapDiv.current, {
        zoom: zoom || 12,
        center: location,
        disableDefaultUI: true,
        styles: mapStyle
      }
    );
    new window.google.maps.Marker({position: location, map: map});
  }

  return (
    <div ref={mapDiv} className={styles.Map}></div>
  );
}

export default Map;