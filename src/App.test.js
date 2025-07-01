import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
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
=======
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> 294f6918455954a3c3548be1d5c8902ec4fb5d14
});
