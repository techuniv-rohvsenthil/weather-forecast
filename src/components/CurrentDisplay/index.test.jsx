import React from 'react';
import { render } from '@testing-library/react';

import CurrentDisplay from './index';


xdescribe('the CurrentDisplay component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CurrentDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});
