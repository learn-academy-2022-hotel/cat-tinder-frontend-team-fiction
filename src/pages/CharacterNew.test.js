
import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import CharacterNew from './CharacterNew'

describe("<CharacterNew />", () => {
  render(
    <BrowserRouter>
      <CharacterNew />
    </BrowserRouter>
    )
    it("can see the title of the page", () => {
      const element = screen.getByText(/new character/i)
      expect(element).toBeInTheDocument()
    })
  })