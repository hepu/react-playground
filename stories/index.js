import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '../molecules/banner/banner';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Banner/>
  ));
