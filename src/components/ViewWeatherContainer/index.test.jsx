import React from 'react';
import { render } from '@testing-library/react';

import ViewWeatherContainer from './index';


xdescribe('the ViewWeatherContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ViewWeatherContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
