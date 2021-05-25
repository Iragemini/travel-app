import React, {useRef, useState, useEffect} from 'react';
import TranslatableText from '../TranslatableText/';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import './image-gallery.scss';

import classes from './Gallery.module.scss';

const Gallery = ({gallery}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  return (
    <div className={`${classes.gallery} card mb-3`}>
      <h4 className="card-header">
        <TranslatableText
          dictionary={{
            russian: 'Галерея',
            belarusian: 'Галерэя',
            english: 'Gallery'
          }}
        />
      </h4>
      <ImageGallery
        items={gallery.images}
        showPlayButton={false}
        ref={galleryRef}
        onSlide={() => setCurrentIndex(galleryRef.current.getCurrentIndex())}
      />
      <div className="card-body">
        <h5 className="card-title">
          <TranslatableText
            dictionary={{
              russian: gallery.descriptions.ru[currentIndex].title,
              belarusian: gallery.descriptions.be[currentIndex].title,
              english: gallery.descriptions.en[currentIndex].title
            }}
          />
        </h5>
      </div>
      <div className={`${classes.description} card-footer text-muted`}>
        <TranslatableText
          dictionary={{
            russian: gallery.descriptions.ru[currentIndex].description,
            belarusian: gallery.descriptions.be[currentIndex].description,
            english: gallery.descriptions.en[currentIndex].description
          }}
        />
      </div>
    </div>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.object.isRequired
}

export default Gallery;
