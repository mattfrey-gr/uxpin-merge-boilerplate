/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  boolean,
  object,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import Button from './Button';
import Icon from '../Icon/Icon';

storiesOf('Button', module).addDecorator(withKnobs)
  .add('default', () => {
    const label = text('Label', 'Press Me!');
    const mode = select('Mode', ['filled', 'ghost', 'minimal', 'flat'], 'filled');
    const type = select('Type', ['primary', 'secondary', 'success', 'error', 'warning'], 'primary');
    const size = select('Size', {
      L: 'l',
      M: 'm',
      S: 's',
      XL: 'xl',
      XS: 'xs',
      XXL: 'xxl',
      XXXL: 'xxxl',
    }, 'l');
    const stretched = boolean('Stretched', false);
    const icon = object('Icon', {
      icon: 'TickerSvg',
      size: 's',
    });
    return (
      <Button
        icon={<Icon icon={icon.icon} size={icon.size} uxpId="button2" />}
        mode={mode}
        size={size}
        stretched={stretched}
        type={type}
        uxpId="button1">
        {label}
      </Button>
    );
  });
