import PropTypes from 'prop-types';
import React from 'react';
import BadgeContainer from './Badge.styles';

const Badge = (props) => (
  <BadgeContainer>
    {props.children}
  </BadgeContainer>
);

Badge.propTypes = {
  /**
   * @uxpinpropname Text
   */
  children: PropTypes.string,
};

export default Badge;
