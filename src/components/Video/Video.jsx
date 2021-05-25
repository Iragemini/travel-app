import React from 'react';
import ReactPlayer from 'react-player';
import './css/video.css';
import TranslatableText from '../TranslatableText/TranslatableText';
import PropTypes from 'prop-types';

const Video = ({video}) => {
  return (
    <>
      <div className="card video">
        <h4 className="card-header">
          <TranslatableText
            dictionary={{
              russian: 'Видео о стране',
              belarusian: 'Відэа пра краіну',
              english: 'Video about country'
            }}
          />
        </h4>
        <ReactPlayer url={video} controls={true} width="100%" height="100%" light={true} />
      </div>
    </>
  );
};

Video.propTypes = {
  video: PropTypes.string.isRequired
}

export default Video;
