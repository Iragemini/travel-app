import React from 'react';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';
import PropTypes from 'prop-types';
import './css/map.css';
import {MapContainer, TileLayer, Marker, Polygon} from 'react-leaflet';
import TranslatableText from '../TranslatableText/TranslatableText';

const Map = ({country}) => {
  const position = country.coordinates;
  const handle = useFullScreenHandle();

  const polyline = country.border;

  const limeOptions = {color: 'lime'};

  function mapChangeSize() {
    const mapWrapper = document.querySelector('.map-wrapper');
    const button = document.querySelector('.map-button');

    mapWrapper.classList.toggle('full-size');
    button.classList.toggle('map-button--full-size');

    if (mapWrapper.classList.contains('full-size')) {
      handle.enter();
    } else {
      handle.exit();
    }
  }

  document.addEventListener('fullscreenchange', (e) => {
    const mapWrapper = document.querySelector('.map-wrapper');
    const button = document.querySelector('.map-button');

    if (!document.fullscreenElement) {
      button.classList.remove('map-button--full-size');
      mapWrapper.classList.remove('full-size');
    }
  });

  return (
    <div className="card mb-3 container-map">
      <h4 className="card-header">
        <TranslatableText
          dictionary={{
            russian: 'Карта',
            belarusian: 'Карта',
            english: 'Map'
          }}
        />
      </h4>

      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />

      <FullScreen handle={handle}>
        <button className="map-button" onClick={mapChangeSize}></button>
        <div className="map-wrapper">
          <MapContainer center={position} zoom={3} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
            <Polygon pathOptions={limeOptions} positions={polyline} />
          </MapContainer>
        </div>
      </FullScreen>
    </div>
  );
};

Map.propTypes = {
  country: PropTypes.object.isRequired
};

export default Map;
