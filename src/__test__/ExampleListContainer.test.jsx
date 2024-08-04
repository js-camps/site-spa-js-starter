// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, act, cleanup } from '@testing-library/react';
import { afterEach, describe, it, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';

import ExampleListContainer from '../components/pages/ExampleList/ExampleListContainer.jsx';

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

vi.mock('../api', () => ({
  getExampleData: vi.fn(() => Promise.resolve([])),
}));

describe('<ExampleListContainer /> test suite', () => {
  it('[1] container renders without crashing', async () => {
    await act(async () => {
      await render(
        <Router>
          <ExampleListContainer />
        </Router>
      );
    });
  });
});
