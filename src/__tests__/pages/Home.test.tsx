// Imports
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// To Test
import Home from '@/pages/Home';
import posts from '@root/dummy_data.json';

// Tests
describe('Home', () => {
  test('Renders main page correctly', async () => {
    // Setup
    renderWithRouter('/home');

    const codeCount = await screen.queryByText(/34/);

    // 일단!!! 리액트 쿼리는 사용하지 말자!
    console.log(codeCount);
    expect(codeCount).not.toBe(null);
  });

  test('광고들 렌더링', () => {});

  test('스터디 포스팅(High, Middle, Free)들 화면 렌더링', () => {});

  test('포스팅 클릭 시 상세 페이지로 이동', async () => {});

  test('필터링 값에 따른 포스팅 렌더링', async () => {});

  function renderWithRouter(route: string) {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Home />
      </MemoryRouter>
    );
  }
});
