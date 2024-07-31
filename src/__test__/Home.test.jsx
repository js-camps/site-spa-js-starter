// eslint-disable-next-line no-unused-vars
import React from 'react';

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

// Assuming the Home component is located at './Home'
import Home from "../components/HomeComponent";

describe('Home Component', () => {
    it("[1] renders welcome message", () => {
        // let's just make sure the component mounts with an H1, you'll want to update this test to include any UI on your landing page you'd like
        const { getByText } = render(<Home />);
        const h1 = getByText(/welcome to labs basic spa/i);
        expect(h1.textContent).toBe("Welcome to Labs Basic SPA");
    });
});
