// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // Import from vitest

import { LoadingComponent } from '../components/common';

describe('Loading Common Component', () => {
  it('[1] should mount a div based on props', () => {
    const { getByText, rerender } = render(
      <LoadingComponent message="Loading Content" />,
    );
    const message = getByText(/loading content/i);
    expect(message.textContent).toBe('Loading Content');

    rerender(<LoadingComponent message="Loading User Profile" />);
    const newMessage = getByText(/loading user profile/i);
    expect(newMessage.textContent).toBe('Loading User Profile');
  });
});
