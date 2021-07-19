import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SummaryForm from '../SummaryForm';

describe('Given a SummaryForm component', () => {
  render(<SummaryForm />);
  const checkInput = screen.getByRole('checkbox');
  const button = screen.getByRole('button', { name: /confirm order/i });

  test('When the checkbox is unchecked confirm order button should be disabled', () => {
    userEvent.click(checkInput);
    expect(button).toBeEnabled();
    userEvent.click(checkInput);
    expect(button).toBeDisabled();
  });
  test('When the component is rendered popover should not be in the document', () => {
    render(<SummaryForm />);
    const popOver = screen.getByRole('tooltip');
    expect(popOver).not.toBeInTheDocument();
  });
});
