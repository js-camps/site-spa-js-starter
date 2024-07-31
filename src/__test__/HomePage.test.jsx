// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';

import HomePage from '../components/pages/HomePage.jsx'; // Ensure this path is correct

describe('HomePage', () => {
    it('[1] renders welcome message with user name', () => {
        const userInfo = { name: 'John' };
        const { getByText } = render(<HomePage userInfo={userInfo} />);

        const h1 = getByText(/welcome to labs basic spa/i);
        expect(h1.textContent).toBe("Welcome to Labs Basic SPA");

        const h3 = getByText(/Hi John, you are more than welcome!/i);
        expect(h3.textContent).toBe("Hi John, you are more than welcome!");

    });
});


