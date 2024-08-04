// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { describe, it, vi, expect, afterEach } from 'vitest';
import { act } from 'react';

// Import the List component
import List from '../components/common/List.jsx';

afterEach(() => {
  cleanup();
});

const getItemsData = vi.fn(() =>
  Promise.resolve([{ id: 1 }, { id: 2 }, { id: 3 }]),
);
const RenderItems = vi.fn((props) =>
  props.data.map((item) => <li key={item.id}>Item</li>),
);

describe('<List /> test suite', () => {
  it("[1] renders 'loading' component initially", async () => {
    let rendered;

    await act(async () => {
      rendered = render(
        <List
          getItemsData={vi.fn(() => new Promise(() => {}))}
          LoadingComponent={() => <div>Loading...</div>}
          RenderItems={RenderItems}
        />,
      );
    });

    expect(rendered.getByText('Loading...').textContent).toBe('Loading...');
  });

  it('[2] renders item data', async () => {
    let rendered;

    await act(async () => {
      rendered = await render(
        <List
          getItemsData={getItemsData}
          LoadingComponent={() => <div>Loading...</div>}
          RenderItems={RenderItems}
        />,
      );
    });

    // We expect 3 child elements to render corresponding to the 3 objects
    // in our mock dataset
    expect(rendered.container.children).toHaveLength(3);
  });
});
