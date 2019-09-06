/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Badge from './Badge';

storiesOf('Badge', module).addDecorator(withKnobs).add('default', () => {
  const badgeText = text('Text', 'badge text');
  return <Badge>{badgeText}</Badge>;
});
