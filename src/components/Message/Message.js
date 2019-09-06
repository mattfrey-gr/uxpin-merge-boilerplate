import PropTypes from 'prop-types';
import React from 'react';
import MessageContainer from './Message.styles';

const Message = (props) => (
  <MessageContainer>
    {props.text}
  </MessageContainer>
);

Message.propTypes = {
  text: PropTypes.string,
};

export default Message;
