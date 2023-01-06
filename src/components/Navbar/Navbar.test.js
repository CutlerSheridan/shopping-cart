import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import * as MockCartContext from '../../CartContext';

jest.mock('../../CartContext');

const emptyCart = [
  { name: 'item1', quantity: 0 },
  { name: 'item2', quantity: 0 },
];
const fullCart = [
  { name: 'item1', quantity: 3 },
  { name: 'item2', quantity: 4 },
];

// THIS WOULD HAVE BEEN IF THEY ALL REQUIRED THE SAME CART QUANTITY
// jest.mock('../../CartContext', () => {
//   const useCart = () => {
//     return [
//       { name: 'item1', quantity: 0 },
//       { name: 'item2', quantity: 0 },
//     ];
//   };
//   return { useCart };
// });

describe('Navbar component w/ empty cart', () => {
  beforeEach(() => {
    MockCartContext.useCart.mockReturnValue(emptyCart);
  });

  it('renders home button (via getByRole)', () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const homeButton = screen.getByRole('link', { name: /^home$/i });
    expect(homeButton).toBeInTheDocument();
  });
  it('renders home button (via getByText)', () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const homeButton = screen.getByText(/^home$/i);
    expect(homeButton).toBeInTheDocument();
  });
  it('renders cart at 0', () => {
    // const { container } = render(<Navbar />, { wrapper: BrowserRouter });
    // expect(container).toMatchSnapshot();
    render(<Navbar />, { wrapper: BrowserRouter });
    const cartButton = screen.getByRole('link', { name: /cart:\s.*/i });
    expect(cartButton.textContent).toMatch(/cart:0\s?/i);
  });
});

describe('Navbar component w/ full cart', () => {
  beforeEach(() => {
    MockCartContext.useCart.mockReturnValue(fullCart);
  });

  it('renders cart at 7', () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    const cartButton = screen.getByRole('link', { name: /cart:\s.*/i });

    expect(cartButton.textContent).toMatch(/cart:7\s?/i);
  });
});
