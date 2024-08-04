// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach, describe, it, vi, expect } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';

import RenderExampleList from '../components/pages/ExampleList/RenderExampleListPage.jsx';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.clearAllMocks();
});

const mockData = [
  {
    id: 1,
    albumId: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    id: 2,
    albumId: 1,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    id: 3,
    albumId: 1,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
];

describe('<RenderExampleList /> test suite', () => {
  it("[1] items container is rendered when passed empty 'data' array", () => {
    const { container } = render(
      <Router>
        <RenderExampleList data={[]} />
      </Router>
    );
    console.log(container.innerHTML); // Log the rendered HTML
    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelectorAll('p')).toHaveLength(1); // Adjusted to check for <p> tag
    expect(container.firstChild.children).toHaveLength(1); // Adjusted to check for one child (the <p> tag)
  });

  it("[2] items container shows prop type error if no 'id' property is present in data", () => {
    const incorrectData = mockData.map((o) => {
      const newO = { ...o };
      delete newO.id;
      return newO;
    });

    const mockConsoleErrorMethod = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <Router>
        <RenderExampleList data={incorrectData} />
      </Router>
    );

    expect(mockConsoleErrorMethod).toHaveBeenCalled();
    console.log(mockConsoleErrorMethod.mock.calls[0][0]);
    expect(mockConsoleErrorMethod.mock.calls[0][0]).toMatch(
      /Warning: Failed prop type: The prop `data\[0\]\.id` is marked as required|Failed %s type: %s%s/,
    );
  });

  it('[3] items container returns elements containing item data', () => {
    const { container } = render(
      <Router>
        <RenderExampleList data={mockData} />
      </Router>
    );
    console.log(container.innerHTML); // Log the rendered HTML
    expect(container.querySelectorAll('figure')).toHaveLength(3); // Adjusted to check for <figure> tags
  });
});
