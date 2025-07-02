import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders About Omnitech heading on Home page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const heading = screen.getByRole('heading', { name: /about omnitech/i });
  expect(heading).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
