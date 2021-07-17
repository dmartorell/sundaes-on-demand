import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SummaryForm from '../SummaryForm';

describe('Given a SummaryForm component', () => {
  render(<SummaryForm />);
  const checkInput = screen.getByRole('checkbox');
  const button = screen.getByRole('button', { name: /confirm order/i });

  test('When the checkbox is unchecked confirm order button should be disabled', () => {
    fireEvent.click(checkInput);
    expect(button).toBeEnabled();
    fireEvent.click(checkInput);
    expect(button).toBeDisabled();
  });
});
