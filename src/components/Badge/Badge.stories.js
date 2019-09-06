/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import Badge from './Badge';

storiesOf('Badge', module).addDecorator(withKnobs).add('default', () => {
  const badgeText = text('Text', 'badge text');
  const theme = select('Theme', ['primary', 'highlight', 'success', 'error', 'warning'], 'primary');
  return <Badge theme={theme}>{badgeText}</Badge>;
});
