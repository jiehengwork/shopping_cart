import React from 'react';

const ShoppingCartItem = ({data}) => {

  const [imgPath, productName, productCost, productQuantity] = data

 return (
   <tr>
     <td>圖片</td>
     <td>品名</td>
     <td>100 NTD</td>
     <td><input 
      type={"number"}
      
     ></input></td>
     <td></td>
     <td></td>
   </tr>
 )
};

export default ShoppingCartItem