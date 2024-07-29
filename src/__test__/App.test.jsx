import React from 'react';

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../components/App.jsx';

describe('App Component', () => {
    it('renders welcome message', () => {
        render(<App />);

        screen.debug(); // This will log the rendered HTML to the console
        const welcomeElement = screen.getByText(/Welcome to Sites/i);
        expect(welcomeElement).toBeInTheDocument();
    });
});