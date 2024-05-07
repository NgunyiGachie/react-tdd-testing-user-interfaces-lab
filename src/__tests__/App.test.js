import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

describe("App Component", () => {
    test("renders an image of yourself with alt text", () => {
        //Arrange
        render(<App />);
        //Act
        const image = screen.getByAltText("My Image");
        //Assert
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "my-image-url.jpg");
  });
  
 test("renders a second-level heading with the text About Me", () => {
        //Arrange
        render(<App />);
        //Act
        const aboutMeHeading = screen.getByRole("heading", { name: /About Me/i, level: 2 });
        //Assert
        expect(aboutMeHeading).toBeInTheDocument();
    });
  
test("renders a paragraph for your biography", () => {
        //Arrange  
        render(<App />);
        //Act
        const biographyParagraph = screen.getByText(/My name is Anthony/i);
        //Assert
        expect(biographyParagraph).toBeInTheDocument();
      });
  
test("renders a link to your GitHub page", () => {
        //Arrange
        render(<App />);
        //Act
        const githubLink = screen.getByRole("link", { name: /GitHub/i });
        //Assert  
        expect(githubLink).toBeInTheDocument();
          expect(githubLink).toHaveAttribute("href", "https://github.com/NgunyiGachie");
      });
  
test("renders a link to your LinkedIn page", () => {
        //Arrange  
        render(<App />);
        //Act
        const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
        //Assert
        expect(linkedinLink).toBeInTheDocument();
        expect(linkedinLink).toHaveAttribute("href", "www.linkedin.com/in/gachie-ngunyi-8499062b8");
      });
  });
  
