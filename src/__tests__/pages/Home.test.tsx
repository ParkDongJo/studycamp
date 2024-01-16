// Imports
import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// To Test
import Home from '@/pages/Home';

// Tests
describe('Home', () => {
  test('Renders main page correctly', async () => {
    // Setup
    renderWithRouter('/home');
    const buttonCount = await screen.findByRole('button');
    const codeCount = await screen.queryByText(/The count is now:/);

    // Pre Expecations
    expect(buttonCount.innerHTML).toBe('count is 0');
    // Instead of:
    expect(codeCount).toBeNull();
    expect(codeCount).toBeNull();

    // Init
    fireEvent.click(buttonCount);
    fireEvent.click(buttonCount);

    // Post Expectations
    expect(buttonCount.innerHTML).toBe('count is 2');
    expect(await screen.queryByText(/The count is now:/)).toBeNull();
  });

  test('광고들 렌더링', () => {
    renderWithRouter('/home');
    const defaultText = screen.queryByText(/광고/);

    expect(defaultText).not.toBeNull();
  });

  test('스터디 포스팅(High, Middle, Free)들 화면 렌더링', () => {
    renderWithRouter('/home');
    const GuaranteePost = screen.queryByText(/포스팅 검증/);
    const FreePost = screen.queryByText(/포스팅 무료/);

    expect(GuaranteePost).not.toBeNull();
    expect(FreePost).not.toBeNull();
  });

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
