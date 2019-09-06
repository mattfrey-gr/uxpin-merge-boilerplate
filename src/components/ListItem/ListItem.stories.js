/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import ListItem from './ListItem';

storiesOf('ListItem', module).addDecorator(withKnobs).add('default', () => {
  const primaryText = text('Primary Text', 'List Item Title');
  const secondaryText = text('Secondary Text', 'supporting text');
  return <ListItem primaryText={primaryText} secondaryText={secondaryText} />;
});
