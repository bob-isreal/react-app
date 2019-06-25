import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TodoApp from '../TodoApp';
import TodoForm from '../TodoForm';

describe('Todo App', () => {
  test('The App Works', () => {
    window.alert = jest.fn();

    const { container, unmount, getByLabelText } = render(<TodoApp />);
    const button = container.querySelector('button');

    fireEvent.click(button);
    expect(alert).toHaveBeenCalled();

    fireEvent.change(getByLabelText(/what needs to be done/i), { target: { value: 'This is me' } });
    expect(Array.from(container.querySelectorAll('li')).length).toBeLessThan(1);

    fireEvent.submit(container.querySelector('form'));
    expect(Array.from(container.querySelectorAll('li')).length).toBeGreaterThan(0);
    expect(container.querySelector('li')).not.toBeNull();

    unmount();
  });
  test('The Form Works', () => {
    window.alert = jest.fn();
    const handleSubmit = jest.fn(() => 'Called');
    const items = [1, 2, 3, 4, 5, 6];
    const { container, getByLabelText } = render(<TodoForm items={items} onSubmit={handleSubmit} />);
    const button = container.querySelector('button');

    fireEvent.click(button);
    expect(alert).toHaveBeenCalled();

    fireEvent.change(getByLabelText(/what needs to be done/i), { target: { value: 'This is me' } });
    expect(Array.from(container.querySelectorAll('li')).length).toBeLessThan(1);

    fireEvent.submit(container.querySelector('form'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
