// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { NotFoundPage } from '../components/pages/NotFound';

describe('Loading Common Component', () => {
  it('should mount a div based on props', () => {
    const { getByText } = render(
      <Router>
        <NotFoundPage />
      </Router>,
    );
    const h1 = getByText(/404 page not found/i);
    expect(h1.textContent).toBe('404 Page Not Found');
  });
});
