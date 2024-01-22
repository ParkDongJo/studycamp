// Imports
import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

// To Test
import Card, { Props } from '@/components/Post/Card';

jest.mock('@/components/common/Icon', () => {
  const MockedIcon = ({ icon }: { icon: string }) => <div>{icon}</div>;
  return MockedIcon;
});

// Tests
describe('Card', () => {
  test('Renders main page correctly', async () => {
    // Setup
    const comp = renderCard({
      type: 'study',
      channel: 'online',
      title: 'Test title',
      recuitsCount: 1,
      likeCount: 1,
      viewCount: 1,
      fields: [],
      deadlineDate: new Date('2021-01-01'),
      user: {
        name: 'Test name',
        profileImage: 'test.png',
      },
    });

    expect(comp.getByText('study')).not.toBeNull();
    expect(comp.getByText('online')).not.toBeNull();
    expect(comp.getByText('Test title')).not.toBeNull();
    expect(comp.getByText('마감일 : 2021.01.01')).not.toBeNull();
  });

  function renderCard(props: Props) {
    return render(<Card {...props} />);
  }
});
