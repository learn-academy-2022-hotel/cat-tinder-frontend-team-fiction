import { render, screen } from "@testing-library/react"
import CharacterShow from "./CharacterShow"
import mockCharacters from "../mockCharacters"
import { MemoryRouter, Routes, Route } from "react-router-dom";



const renderShow = () => {
    render(
    <MemoryRouter initialEntries={["/charactershow/1"]}>
      <Routes>
      <Route path="charactershow/:id" element={<CharacterShow characters={mockCharacters}/>} />
      </Routes>
    </MemoryRouter>
    )
  }



describe("<CharacterShow />", () => {


  it("renders a card without crashing", () => {
    const div = document.createElement("div")
    renderShow()
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('img', { name: /profile of a character named spider\-man/i })).toBeInTheDocument()
    })
  })

  