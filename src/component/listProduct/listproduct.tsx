import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import Product from '../Product/Product';
// import Product from "../Product/Product";

// interface SelectedProduct {
//   title: string;
//   img: string;
//   details: string;
//   price: number;
//   count: number;
// }

const ListProduct = () => {
  const [isChecked, setChecked] = useState(false);
  // const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
  //   []
  // );

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  // const handleIncrement = (index: number) => {
  //   const updatedProducts = [...selectedProducts];
  //   updatedProducts[index].count += 1;
  //   setSelectedProducts(updatedProducts);
  // };

  // const handleDecrement = (index: number) => {
  //   const updatedProducts = [...selectedProducts];
  //   if (updatedProducts[index].count > 1) {
  //     updatedProducts[index].count -= 1;
  //     setSelectedProducts(updatedProducts);
  //   }
  // };

  // const handleProductSelect = (productData: SelectedProduct) => {
  //   setSelectedProducts([...selectedProducts, { ...productData, count: 1 }]);
  // };

  // const handleDelete = (index: number) => {
  //   const updatedProducts = [...selectedProducts];
  //   updatedProducts.splice(index, 1);
  //   setSelectedProducts(updatedProducts);
  // };

  return (
    <div className="list-product-container">
      <h1>รถเข็น</h1>
      <Table responsive className="product-table">
        <tbody>
            <tr>
              <td>
                <div className="product-row">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <Image
                    src="https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120023931_c_Midst_WT.JPG&w=828&q=75"
                  width="200px"
                  />
                  <div className="product-info">10</div>
                </div>
              </td>
              <td>
                <p>price</p>
              </td>
              <td>
                <div className="quantity-control">
                  <Button
                    variant="outline-secondary"
                  
                  >
                    -
                  </Button>
                  <span>0</span>
                  <Button
                    variant="outline-secondary"
                    
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>
               <p>Total</p>              </td>
              <td>
                <Button variant="danger" >
                  Delete
                </Button>
              </td>
            </tr>
          
        </tbody>
      </Table>
    </div>
  );
};

export default ListProduct;
