import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    const appElement = screen.getByRole('main');
    expect(appElement).toBeInTheDocument();
  });

  test('renders header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<App />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders product list', () => {
    render(<App />);
    const productListElement = screen.getByRole('list');
    expect(productListElement).toBeInTheDocument();
  });

  test('renders cart', () => {
    render(<App />);
    const cartElement = screen.getByRole('region', { name: 'Cart' });
    expect(cartElement).toBeInTheDocument();
  });
});
