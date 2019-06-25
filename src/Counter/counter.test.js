import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Counter from './';

afterEach(cleanup);

describe('Counter tests', () => {
  test('It mounts', () => {
    const { getByText } = render(<Counter />);

    expect(getByText(/You clicked 0 times/)).not.toBeNull();
    expect(getByText(/Click me/)).not.toBeNull();
  });

  test('Clicking increases the count', () => {
    const { getByText } = render(<Counter />);

    fireEvent.click(getByText(/Click me/));

    expect(getByText(/You clicked 1 times/)).not.toBeNull();
  });

  test('Updates the document title on mount and updates it', () => {
    const { getByText } = render(<Counter />);

    const newTitle = document.title;

    expect(newTitle).toBe('React 0');

    fireEvent.click(getByText(/Click me/));

    expect(getByText(/You clicked 1 times/)).not.toBeNull();
    expect(document.title).toBe('React 1');
  });

  test('Restores document title when unmounted', () => {
    const previousTitle = document.title;

    const { getByText, unmount } = render(<Counter />);

    const newTitle = document.title;

    expect(previousTitle).not.toBe(newTitle);

    fireEvent.click(getByText(/Click me/));
    fireEvent.click(getByText(/Click me/));

    expect(getByText(/You clicked 2 times/)).not.toBeNull();
    expect(document.title).toBe('React 2');

    unmount();

    expect(document.title).toBe(previousTitle);
  });
});
