import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('renders footer name sasha', () => {
    render(<Footer />);
    expect(screen.getByText('AleksandrZanko'));
});

it('renders footer name petr', () => {
  render(<Footer />);
  expect(screen.getByText('musakius'));
});

it('renders footer name ira', () => {
  render(<Footer />);
  expect(screen.getByText('Iragemini'));
});

it('renders footer this year', () => {
  render(<Footer />);
  expect(screen.getByText('© 2021'));
});


