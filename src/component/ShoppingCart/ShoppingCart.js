import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>商品</th>
          <th>單價</th>
          <th>數量</th>
          <th>總計</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <ShoppingCartItem/>
      </tbody>
    </table>
  )
};

export default ShoppingCart