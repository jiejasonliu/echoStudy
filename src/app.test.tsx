import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders search bar with placeholder', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/search my decks/i);
  expect(linkElement).toBeInTheDocument();
});
