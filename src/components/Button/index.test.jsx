import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';


describe('the button component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button testID="test-btn" text="Test text" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
