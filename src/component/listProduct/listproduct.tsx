import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import Product from '../Product/Product';
// import Product from "../Product/Product";

interface SelectedProduct {
  title: string;
  img: string;
  details: string;
  price: number;
  count: number;
}

const ListProduct = () => {
  const [isChecked, setChecked] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleIncrement = (index: number) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts[index].count += 1;
    setSelectedProducts(updatedProducts);
  };

  const handleDecrement = (index: number) => {
    const updatedProducts = [...selectedProducts];
    if (updatedProducts[index].count > 1) {
      updatedProducts[index].count -= 1;
      setSelectedProducts(updatedProducts);
    }
  };

  // const handleProductSelect = (productData: SelectedProduct) => {
  //   setSelectedProducts([...selectedProducts, { ...productData, count: 1 }]);
  // };

  const handleDelete = (index: number) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.splice(index, 1);
    setSelectedProducts(updatedProducts);
  };

  return (
    <div className="list-product-container">
      <h1>รถเข็น</h1>
      <Table responsive className="product-table">
        <tbody>
          {selectedProducts.map((product, index) => (
            <tr key={index}>
              <td>
                <div className="product-row">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <Image
                    src={product.img}
                    alt={`Product ${index + 1}`}
                    width={100}
                    rounded
                    className="product-image"
                  />
                  <div className="product-info">{product.title}</div>
                </div>
              </td>
              <td>
                {/* <Product
                  message={product.price}
                  onSelectProduct={() => handleProductSelect(product)}
                /> */}
              </td>
              <td>
                <div className="quantity-control">
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </Button>
                  <span>{product.count}</span>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>
                {/* <Product
                  message={product.price * product.count}
                  onSelectProduct={() => handleProductSelect(product)}
                /> */}
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListProduct;
