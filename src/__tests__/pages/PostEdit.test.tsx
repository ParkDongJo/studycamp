// Imports
import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// To Test
import PostEdit from '@/pages/post/Edit';

// Tests
describe('PostEdit', () => {
  test('Renders main page correctly', async () => {
    // Setup
    renderWithRouter('/post/edit');
  });

  function renderWithRouter(route: string) {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <PostEdit />
      </MemoryRouter>
    );
  }
});
