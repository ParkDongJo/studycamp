// Imports
import { test, expect, vi } from 'vitest';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// To Test
import Selector, { Props } from '@/components/Filter/Selector';

window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();

// Tests
describe('Selector', () => {
  test('Renders main page correctly', async () => {
    // Setup
    const comp = renderSelector({
      placeholder: 'test',
      options: ['project', 'study'],
      onChange: () => {},
    });

    expect(comp.getByText('test')).not.toBeNull();
  });

  test('Calls onChange when option is selected', async () => {
    // Setup
    const mockOnChange = vi.fn();
    const comp = renderSelector({
      placeholder: 'test',
      options: ['project', 'study'],
      onChange: mockOnChange,
    });

    await userEvent.click(comp.getByRole('combobox'));

    await waitFor(() => {
      expect(comp.getByText('project')).toBeInTheDocument();
    });
  });

  function renderSelector(props: Props) {
    return render(<Selector {...props} />);
  }
});
