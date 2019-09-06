import PropTypes from 'prop-types';
import React from 'react';
import MediaObjectContainer from './MediaObject.styles';

const MediaObject = (props) => (
  <MediaObjectContainer>
    {props.text}
  </MediaObjectContainer>
);

MediaObject.propTypes = {
  text: PropTypes.string,
};

export default MediaObject;
