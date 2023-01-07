import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shopping from './Shopping';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../CartContext', () => {
  const useCart = () => {
    return [];
  };
  const catalogue = [
    {
      id: 0,
      name: 'empty bottle',
      price: 4,
      imgPath: 'empty-bottle.webp',
    },
    {
      id: 1,
      name: 'set of bottles',
      price: 10,
      imgPath: 'three-bottles.png',
    },
  ];
  const useCartDispatch = () => {};
  return { useCart, catalogue, useCartDispatch };
});
jest.mock('../Cart/CartPreview', () => {
  const CartPreview = () => (
    <div>
      <div>'this is a cart'</div>
    </div>
  );
  return CartPreview;
});

describe('initial Shopping page', () => {
  it('renders Products heading', () => {
    render(<Shopping />, { wrapper: BrowserRouter });
    const heading = screen.getByRole('heading', { name: /^products$/i });

    expect(heading).toBeInTheDocument();
  });
  it('renders first product', () => {
    render(<Shopping />, { wrapper: BrowserRouter });
    const productHeading = screen.getByRole('heading', {
      name: /empty\sbottle/i,
    });

    expect(productHeading).toBeInTheDocument();
  });
});
