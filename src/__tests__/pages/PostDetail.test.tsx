// Imports
import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// To Test
import PostDetail from '@/pages/post/Detail';

// Tests
describe('Home', () => {
  test('Renders main page correctly', async () => {
    // Setup
    renderWithRouter('/post/detail');
  });

  function renderWithRouter(route: string) {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <PostDetail />
      </MemoryRouter>
    );
  }
});
