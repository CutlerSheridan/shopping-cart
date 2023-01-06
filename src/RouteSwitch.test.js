import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RouteSwitch from './RouteSwitch';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('Routes work', () => {
  it('renders Home page by default', () => {
    render(<RouteSwitch />);
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toMatch(/apothique/i);
  });
  it('takes you to Shopping page', () => {
    render(<RouteSwitch />);
    const shoppingButton = screen.getByRole('link', { name: /^shopping$/i });

    userEvent.click(shoppingButton);
    const heading = screen.getByRole('heading', { name: /^Products$/ });

    expect(heading).toBeInTheDocument();
  });
  it('takes you to Cart page', () => {
    render(<RouteSwitch />);
    const cartButton = screen.getByRole('link', { name: /^cart.*/i });

    userEvent.click(cartButton);

    expect(
      screen.getByRole('heading', { name: /^cart$/i })
    ).toBeInTheDocument();
  });
});
