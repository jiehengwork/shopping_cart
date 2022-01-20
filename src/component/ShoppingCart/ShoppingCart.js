import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

// 模擬從API取得的檔案 (API從用戶資料表取得產品&數量 + 產品資料表取得圖片&定價)
const fakeData = [['./build/picture/productPic.jpg', '測試商品', '100', '1'],['./build/picture/productPic.jpg', '測試商品', '100', '1']]
const shoppingCartContent = []
fakeData.forEach(item => {
  shoppingCartContent.push(<ShoppingCartItem data={item}/>)
});

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
        {shoppingCartContent}
      </tbody>
    </table>
  )
};

export default ShoppingCart