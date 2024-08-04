// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, vi } from 'vitest';

import { ProfileListPage } from '../components/pages/ProfileList';

vi.mock('../api', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    getExampleData: () => Promise.resolve([]),
  };
});

vi.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {},
    };
  },
}));

describe('<ProfileListContainer />', () => {
  it('renders a list component', async () => {
    await act(async () => {
      const { debug } = render(
        <Router>
          <ProfileListPage />
        </Router>
      );
      debug();
    });
  });
});
