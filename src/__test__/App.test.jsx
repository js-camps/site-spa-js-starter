// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Routes from '../components/App.jsx'; // Assuming your App.jsx is renamed to Routes.jsx

describe('Routes Component', () => {
    it("[1] renders the Home component on the default route", () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/']}>
                <Routes />
            </MemoryRouter>
        );
        const h1 = getByText(/welcome to labs basic spa/i);
        expect(h1).toBeInTheDocument();
    });

    it("[2] renders the Login component on '/login' path", () => {
        const { getByPlaceholderText, getByLabelText } = render(
            <MemoryRouter initialEntries={['/login']}>
                <Routes />
            </MemoryRouter>
        );
        // Check for specific form inputs to ensure the Login component is rendered
        const userNameInput = getByPlaceholderText("User Name");
        const passwordInput = getByPlaceholderText("Password");
        const emailLabel = getByLabelText("Email:");
        const passwordLabel = getByLabelText("Password:");

        expect(userNameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
    });
});
