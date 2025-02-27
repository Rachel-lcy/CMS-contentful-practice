import{render, screen}  from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from './RecipeCard';
import React from 'react';

const mockRecipe = {
  fields: {
    title: "Shanghai Xiaolongbao",
    slug: "shanghai-xiaolongbao",
    cookingTIme: 180,
    thumbnail: {
      fields: {
        file: {
          url: "//images.ctfassets.net/2v0lyen0ruy5/ncLqJiMnY1UjnP…bcc073250fe984cf23675b85/Shanghai_Xiaolongbao.jpg",
          details: {
            image: {
              width: 500,
              height: 300
            }
          }
        }
      }
    }
  }
};

describe("RecipeCard Component", () => {
  test("renders RecipeCard with title, cooking time, and image", () => {
    render(<RecipeCard recipe={mockRecipe} />);


    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("Shanghai Xiaolongbao");


    expect(screen.getByText(/Tasks approx 180 mins to make/)).toBeInTheDocument();


    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(img).toHaveAttribute("width", "500");
    expect(img).toHaveAttribute("height", "300");
    expect(img).toHaveAttribute("alt", "Shanghai Xiaolongbao");
  });

  test("renders link to recipe details page", () => {
    render(<RecipeCard recipe={mockRecipe} />);

    const link = screen.getByRole("link", { name: /Details/i });
    expect(link).toHaveAttribute("href", "./recipes/shanghai-xiaolongbao");
  });
});
