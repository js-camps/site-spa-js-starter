import React from "react";
import { render, act, cleanup, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import { HomePage } from '../components/pages/Home';
import RenderHomePage from '../components/pages/Home/RenderHomePage.jsx';
import PropTypes from 'prop-types';

const LoadingComponent = ({ message }) => <div>{message}</div>;

LoadingComponent.propTypes = {
    message: PropTypes.string.isRequired
};

afterEach(() => {
    cleanup();
    vi.resetAllMocks();
});

describe("<HomePage /> test suite", () => {
    it("[1] authenticated and userProfile not null", async () => {
        await act(async () => {
            render(<HomePage LoadingComponent={LoadingComponent} />);
        });

        const welcomeText = await waitFor(() =>
                screen.findByText(/hi richard, you are more than welcome!/i),
            { timeout: 1500 }
        );
        expect(welcomeText).toBeInTheDocument();
    });

    it("[2] renders loading component based on initial null userInfo state", () => {
        render(<HomePage LoadingComponent={LoadingComponent} />);
        const loading = screen.getByText(/... fetching user profile/i);
        expect(loading.textContent).toBe("... Fetching user profile");
    });

    it('[3] renders welcome message with user name', () => {
        const userInfo = { name: 'John' };
        const { getByText } = render(<RenderHomePage userInfo={userInfo} />);

        const h1 = getByText(/welcome to labs basic spa/i);
        expect(h1.textContent).toBe("Welcome to Labs Basic SPA");

        const h3 = getByText(/Hi John, you are more than welcome!/i);
        expect(h3.textContent).toBe("Hi John, you are more than welcome!");

    });
});
