import React from "react";
import { render, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("1. form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});
    

test("2. form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name/i);
    userEvent.type(firstName, 'Ashley');

    const lastName = screen.getByLabelText(/Last Name/i);
    userEvent.type(lastName, 'Laz');

    const addressInput = screen.getByLabelText(/Address/i);
    userEvent.type(addressInput, '107 Springs Drive');

    const cityInput = screen.getByLabelText(/City/i);
    userEvent.type(cityInput, 'Orlando');

    const stateInput = screen.getByLabelText(/State/i);
    userEvent.type(stateInput, 'FL');

    const zipInput = screen.getByLabelText(/Zip/i);
    userEvent.type(zipInput, '32824');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const messageTest = await screen.getByTestId("successMessage");
    expect(messageTest).toBeVisible();

});
