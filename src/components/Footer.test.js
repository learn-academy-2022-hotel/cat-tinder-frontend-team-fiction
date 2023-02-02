import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer"
import "@testing-library/jest-dom"

describe("<Footer />", () => {
  it("has a copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    
    const footer = screen.getByText(/team fiction/i)
    expect(footer).toBeInTheDocument()
  })
})