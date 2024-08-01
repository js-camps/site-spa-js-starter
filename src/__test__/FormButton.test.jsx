import FormButton from '../components/common/FormButton.jsx';

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

describe('<FormButton /> test suite', () => {
  it('[1] button text is determined by props', () => {
    // for this first assertion, we'll simply ensure that the button's text is determined by the props passed to it
    // we'll also ensure that the className defaults to primary where none is passed as props
    const { getByText, rerender } = render(
      <FormButton buttonText="Click Here" />,
    );
    const button = getByText(/click here/i);
    expect(button.textContent).toBe('Click Here');
    expect(button.className).toBe('primary');
    expect(button.textContent).toBe('Click Here');
    expect(button.className).toBe('primary');
    expect(button.textContent).toBe('Click Here');
    rerender(<FormButton buttonText="Click There" />);
    expect(button.textContent).toBe('Click There');
  });
});
