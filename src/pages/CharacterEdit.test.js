import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockCharacters from "../mockCharacters";
import CharacterEdit from "./CharacterEdit";

describe("<CharacterEdit />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <CharacterEdit />
            </BrowserRouter>
        )
    })
    it("has a submit button", () => {
        render(
            <BrowserRouter>
                <CharacterEdit />
            </BrowserRouter>
        )
        const button = screen.getByRole('button', {
            name: /Submit/i
          })
        expect(button).toBeInTheDocument()
    })
})
