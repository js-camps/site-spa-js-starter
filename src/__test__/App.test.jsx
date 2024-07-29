// eslint-disable-next-line no-unused-vars
import React from 'react';

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../components/App.jsx';

describe('App Component', () => {
    it("renders welcome message", () => {
        // let's just make sure the component mounts with an H1, you'll want to update this test to include any UI on your landing page you'd like
        const { getByText } = render(<App />);
        const h1 = getByText(/welcome to labs basic spa/i);
        expect(h1.textContent).toBe("Welcome to Labs Basic SPA");
        // expect(h1.type).toBe("h1");
    });
});



