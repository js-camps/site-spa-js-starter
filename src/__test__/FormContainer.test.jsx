// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { submitLogin as mockSubmitLogin } from "../api";
import FormContainer from "../components/FormComponent/FormContainer";
import { describe, it, test, vi, expect, afterEach } from 'vitest';

vi.mock("../api");

afterEach(() => {
    vi.clearAllMocks();
});

describe("<FormContainer /> test suite", () => {
    it("[1] button responds to click handler", async () => {
        const fakeUser = {
            username: "test@email.com",
            password: "testing123",
        };

        mockSubmitLogin.mockResolvedValueOnce();
        const { getByText, getByLabelText } = render(<FormContainer />);
        const button = getByText(/click/i);
        const emailInput = getByLabelText(/email/i);
        const passwordInput = getByLabelText(/password/i);

        await userEvent.type(emailInput, fakeUser.username);
        await userEvent.type(passwordInput, fakeUser.password);

        expect(button).not.toBeDisabled();

        userEvent.click(button);
        await waitFor(() => {
            expect(button).toBeDisabled();
        });

        expect(mockSubmitLogin).toHaveBeenCalledTimes(1);
        expect(mockSubmitLogin).toHaveBeenCalledWith({
            username: fakeUser.username,
            password: fakeUser.password,
        });
    });


});
