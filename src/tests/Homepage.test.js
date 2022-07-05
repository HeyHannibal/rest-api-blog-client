import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
// import TestComponent from "path-to-test-component";
import { MemoryRouter } from 'react-router-dom';
import { render, waitFor, screen, getByText } from "@testing-library/react";
import Homepage from '../components/homepage'



describe("Homepage component", () => {
  
  it('Shows "Loading" on load', () => {
    render(<Homepage />, { wrapper: MemoryRouter })
    expect(screen.getByText('Loading articles')).toBeInTheDocument()
  })
  it('Actually makes a request, and loads articles from API', async () => {
    render(<Homepage />, { wrapper: MemoryRouter })
    await waitFor(() => { (expect(screen.getAllByRole('article')).toBeTruthy()) }, { interval: '5s' })
  })
});



