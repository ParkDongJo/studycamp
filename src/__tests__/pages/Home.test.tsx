// Imports
import { test, expect } from 'vitest'
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

// To Test
import Home from "@/pages/Home";

// Tests
describe('Home', () => {
  test("Renders main page correctly", async () => {
    // Setup
    renderWithRouter('/home');
    const buttonCount = await screen.findByRole("button");
    const codeCount = await screen.queryByText(/The count is now:/);

    // Pre Expecations
    expect(buttonCount.innerHTML).toBe("count is 0");
    // Instead of:
    expect(codeCount).toBeNull();
    expect(codeCount).toBeNull();

    // Init
    fireEvent.click(buttonCount);
    fireEvent.click(buttonCount);

    // Post Expectations
    expect(buttonCount.innerHTML).toBe("count is 2");
    expect(await screen.queryByText(/The count is now:/)).toBeNull();
  });

  function renderWithRouter(route: string) {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>
    );
  }
});
