import React from 'react';
import { render, cleanup, act } from '@testing-library/react';

import Timer from './';

afterEach(cleanup);

describe('Timer tests', () => {
  test('It renders', () => {
    const { getByText } = render(<Timer />);

    expect(getByText(/Seconds:/)).not.toBeNull();
  });

  test('It counts the time', () => {
    jest.useFakeTimers();

    const { getByText } = render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(getByText(/Seconds: 3/)).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(17000);
    });

    expect(getByText(/Seconds: 20/)).not.toBeNull();
  });
});
