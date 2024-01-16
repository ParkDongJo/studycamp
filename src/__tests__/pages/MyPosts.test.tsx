// Imports
import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// To Test
import MyPosts from '@/pages/my/Posts';

// Tests
describe('Home', () => {
  test('Renders main page correctly', async () => {
    // Setup
    renderWithRouter('/my/posts');
  });

  function renderWithRouter(route: string) {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <MyPosts />
      </MemoryRouter>
    );
  }
});
