// Imports
import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// To Test
import PostCreate from '@/pages/post/Create';

// Tests
describe('Home', () => {
  test('Renders main page correctly', async () => {
    // Setup
    renderWithRouter('/post/create');
  });

  function renderWithRouter(route: string) {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <PostCreate />
      </MemoryRouter>
    );
  }
});
