import FormInput from '../components/common/FormInput.jsx';

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';

describe('<FormInput />', () => {
  afterEach(() => {
    // cleanup after each test runs.
    cleanup();
  });

  it('[1] input is rendered with proper labels', () => {
    // For this assertion, we're just using RTL to test the attributes that get rendered from FormInput
    const { getByLabelText } = render(
      <FormInput
        labelId="User Email"
        name="username"
        placeholder="User Email"
        value=""
        handleInput={() => {}}
      />,
    );

    const input = getByLabelText(/user email/i);
    expect(input.type).toBe('text');
    expect(input.placeholder).toBe('User Email');
  });
});
