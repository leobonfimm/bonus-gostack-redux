import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';

import { ICartItem } from '../store/modules/cart/types';
import cart from '../store/modules/cart/reducer';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  
  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.qunatity}</td>
            <td>{(item.product.price * item.qunatity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;