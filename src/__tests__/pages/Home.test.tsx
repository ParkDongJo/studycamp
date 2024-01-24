// Imports
import { vi, test, expect, Mock } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// To Test
import Home from '@/pages/Home';
import { useFetchPosts } from '@/hooks/useFetchPosts';
import posts from '@/dummy_data.json';

vi.mock('@/hooks/useFetchPosts', () => {
  return {
    useFetchPosts: vi.fn(),
  };
});

// Tests
describe('Home', () => {
  test('Renders main page correctly', async () => {
    // Setup
    (useFetchPosts as Mock<any, any>).mockReturnValue({ data: posts, isLoading: false });

    renderWithRouter('/home');

    await waitFor(async () => {
      expect(screen.queryByText(posts[0].title)).not.toBeNull();
    });
  });

  test('광고들 렌더링', () => {});

  test('스터디 포스팅(High, Middle, Free)들 화면 렌더링', () => {});

  test('포스팅 클릭 시 상세 페이지로 이동', async () => {});

  test('필터링 값에 따른 포스팅 렌더링', async () => {});

  function renderWithRouter(route: string) {
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[route]}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );
  }
});
