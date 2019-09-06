import PropTypes from 'prop-types';
import React from 'react';
import { ListItemContainer, PrimaryText, SecondaryText } from './ListItem.styles';

const ListItem = (props) => (
  <ListItemContainer>
    <PrimaryText>
      {props.primaryText}
    </PrimaryText>
    <SecondaryText>
      {props.secondaryText}
    </SecondaryText>
  </ListItemContainer>
);

ListItem.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
};

export default ListItem;
