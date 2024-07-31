// eslint-disable-next-line no-unused-vars
import React from 'react';

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

// Assuming the Home component is located at './Home'
import { HomePage } from "../components/pages";

describe('Home Component', () => {
    it("[1] renders welcome message", () => {
        // let's just make sure the component mounts with an H1, you'll want to update this test to include any UI on your landing page you'd like
        const { getByText, rerender } = render(
            <HomePage userInfo={{ name: "Freddy" }} />
        );
        const h3 = getByText(/Hi Richard Welcome to Sites Basic SPA/i);
        expect(h3.textContent).toBe("Hi Richard Welcome to Sites Basic SPA");
    });
});