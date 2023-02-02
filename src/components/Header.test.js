import React from 'react'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"
import '@testing-library/jest-dom'

describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render (
            <BrowserRouter>
                <Header/>
            </BrowserRouter>,
            div
        )
    })

    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
            <Header />
            </BrowserRouter>,
            div
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "SpidermanReading.avif")
        expect(logo).toHaveAttribute("alt", "Character Reading logo")
    })
    
    it("has clickable links", () => {
        render(
         <BrowserRouter>
            <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Meet the Characters"))
        expect(screen.getByText("Meet the Characters")).toBeInTheDocument()
        userEvent.click(screen.getByText("Add a New Character"))
        expect(screen.getByText("Add a New Character")).toBeInTheDocument()
        userEvent.click(screen.getByText("Adopt a Character!"))
        expect(screen.getByText("Adopt a Character!")).toBeInTheDocument()
    })
})