// eslint-disable-next-line no-unused-vars
import React from 'react';

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

// Assuming the Home component is located at './Home'
import Home from '../components/HomeComponent';

describe('Home Component', () => {
    it("[1] renders welcome message", () => {
        // Ensuring the component mounts and the H1 tag contains the expected text
        const { getByText } = render(<Home />);
        const h1 = getByText(/welcome to basic spa/i);
        expect(h1).toHaveTextContent("Welcome to Basic SPA");
    });
});
