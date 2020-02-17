import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './index';


xdescribe('the Carousel component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
