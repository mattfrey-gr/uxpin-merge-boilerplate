import PropTypes from 'prop-types';
import React from 'react';
import BadgeContainer from './Badge.styles';

const Badge = (props) => (
  <BadgeContainer theme={props.theme}>
    {props.children}
  </BadgeContainer>
);

Badge.propTypes = {
  /**
   * @uxpinpropname Text
   */
  children: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'highlight', 'success', 'error', 'warning']),
};

export default Badge;
