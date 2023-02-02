import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import '@testing-library/jest-dom'

describe("<App />", () => {
  it("renders a greeting", () => {
    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })
})
















// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
