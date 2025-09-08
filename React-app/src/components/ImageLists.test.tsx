import { ImageLists } from "./ImageLists"
import { render, screen } from "@testing-library/react"

describe("ImageLists tests", () => {
    it("should render heading", () => {
        render(<ImageLists />)

        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })
})