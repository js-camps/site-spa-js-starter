import React from "react";
import { render, act, cleanup, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import Home from "../components/HomeComponent/Home";
import PropTypes from 'prop-types';

const LoadingComponent = ({ message }) => <div>{message}</div>;

LoadingComponent.propTypes = {
    message: PropTypes.string.isRequired
};

afterEach(() => {
    cleanup();
    vi.resetAllMocks();
});

describe("<Home /> test suite", () => {
    it("[1] authenticated and userProfile not null", async () => {
        await act(async () => {
            render(<Home LoadingComponent={LoadingComponent} />);
        });

        const welcomeText = await waitFor(() =>
                screen.findByText(/hi richard, you are more than welcome!/i),
            { timeout: 1500 }
        );
        expect(welcomeText).toBeInTheDocument();
    });

    it("[2] renders loading component based on initial null userInfo state", () => {
        render(<Home LoadingComponent={LoadingComponent} />);
        const loading = screen.getByText(/... fetching user profile/i);
        expect(loading.textContent).toBe("... Fetching user profile");
    });
});
