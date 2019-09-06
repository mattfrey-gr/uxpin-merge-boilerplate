/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import Icon, { IconPaths } from './Icon';

storiesOf('Icon', module).addDecorator(withKnobs).add('default', () => {
  const icon = select('Icon', IconPaths, 'TickerSvg');
  const size = select('Size', {
    L: 'l',
    M: 'm',
    S: 's',
    XL: 'xl',
    XS: 'xs',
    XXL: 'xxl',
    XXXL: 'xxxl',
  }, 's');
  return <Icon icon={icon} size={size} />;
});
