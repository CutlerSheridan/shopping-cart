import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shopping from './Shopping';
import { BrowserRouter } from 'react-router-dom';
import CartPreview from '../Cart/CartPreview';

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
  const CartPreview = () => {
    return (
      <div>
        <div>this is a cart</div>
      </div>
    );
  };
  return CartPreview();
});

describe('Shopping component', () => {
  it('renders Products heading', () => {
    render(<Shopping />, { wrapper: BrowserRouter });
    const heading = screen.getByRole('heading');

    expect(heading.textContent).toMatch(/products/i);
  });
});
