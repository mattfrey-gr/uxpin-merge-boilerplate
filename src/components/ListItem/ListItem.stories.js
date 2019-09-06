/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import ListItem from './ListItem';
import { IconPaths } from '../Icon/Icon';

const sizeOptions = {
  L: 'l',
  M: 'm',
  S: 's',
  XL: 'xl',
  XS: 'xs',
  XXL: 'xxl',
  XXXL: 'xxxl',
};
storiesOf('ListItem', module).addDecorator(withKnobs).add('default', () => {
  const primaryText = text('Primary Text', 'List Item Title');
  const secondaryText = text('Secondary Text', 'supporting text');
  const footer = text('Footer Text', 'footer text');
  const icon = select('Icon', IconPaths, 'PersonSvg');
  const iconSize = select('Icon Size', sizeOptions, 'xxl');
  const includeChevron = boolean('Include Chevron?', true);
  const chevronSize = select('Chevron Size', sizeOptions, 'l');
  return (
    <ListItem
      chevronSize={chevronSize}
      footer={footer}
      icon={icon}
      iconSize={iconSize}
      includeChevron={includeChevron}
      primaryText={primaryText}
      secondaryText={secondaryText}
    />
  );
});
