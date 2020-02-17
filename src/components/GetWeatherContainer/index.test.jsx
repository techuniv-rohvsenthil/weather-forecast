import React from 'react';
import { render } from '@testing-library/react';

import GetWeatherContainer from './index';


describe('the GetWeatherContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<GetWeatherContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
