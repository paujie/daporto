import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutPage from '../page';

jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <img {...props} alt={props.alt ?? ''} />;
  },
}));

describe('Halaman Tentang Saya', () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  it('harus merender judul utama "Tentang Saya"', () => {
    const heading = screen.getByRole('heading', { name: /tentang saya/i });
    expect(heading).toBeInTheDocument();
  });

  it('harus menampilkan nama lengkap', () => {
    const nameText = screen.getByText(/rifqi fauzi ramadhani/i);
    expect(nameText).toBeInTheDocument();
  });

  it('harus memiliki link ke GitHub', () => {
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/paujie');
  });

  it('harus memiliki link untuk kembali ke Home', () => {
    const homeLink = screen.getByRole('link', { name: /kembali ke home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });
});