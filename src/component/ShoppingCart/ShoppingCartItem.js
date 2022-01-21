import React,{useState} from 'react';

const ShoppingCartItem = ({data}) => {
  
  const [imgPath, productName, productCost, quantity] = data
  
  const [productQuantity,setProductQuantity] = useState(quantity)
  
  const quantityHandler = (e) => {
    // if (e.target.value)
  };

 return (
   <tr>
     <td><a href='#'>圖片</a></td>
     <td><a href='#'>{productName}</a></td>
     <td>{productCost.toString() + " NTD"}</td>
     <td><input 
      type={"number"}
      min={1}
      max={99}
      step={1}
      defaultValue={quantity}
      onChange={(e) => {quantityHandler(e)}}
     ></input></td>
     <td>{(productCost * productQuantity).toString() + " NTD"}</td>
     <td></td>
   </tr>
 )
};

export default ShoppingCartItem