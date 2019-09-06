import PropTypes from 'prop-types';
import React from 'react';
import {
  FlexItemContainer,
  FooterText,
  IconContainer,
  ListItemContainer,
  PrimaryText,
  SecondaryText,
  TextContainer,
} from './ListItem.styles';
import Icon, { IconPaths } from '../Icon/Icon';
import colors from '../../styles/colors';

const ListItem = (props) => (
  <ListItemContainer>
    <FlexItemContainer>
      {props.icon && (
        <IconContainer>
          <Icon
            icon={props.icon}
            size={props.iconSize}
          />
        </IconContainer>
      )}
      <TextContainer>
        {props.primaryText && (
          <PrimaryText>
            {props.primaryText}
          </PrimaryText>
        )}
        {props.secondaryText && (
          <SecondaryText>
            {props.secondaryText}
          </SecondaryText>
        )}
        {props.footer && (
          <FooterText>
            {props.footer}
          </FooterText>
        )}
      </TextContainer>
    </FlexItemContainer>
    {props.includeChevron && (
      <FlexItemContainer>
        <Icon
          color={colors.grandrounds.lightGrey}
          icon="ChevronRightSvg"
          size={props.chevronSize}
        />
      </FlexItemContainer>
    )}
  </ListItemContainer>
);

ListItem.propTypes = {
  chevronSize: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  footer: PropTypes.string,
  icon: PropTypes.oneOf(IconPaths),
  iconSize: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  includeChevron: PropTypes.bool,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
};

ListItem.defaultProps = {
  chevronSize: 'l',
  iconSize: 'xxl',
};

export default ListItem;
