import CloseButton from "react-bootstrap/esm/CloseButton";
import "./Product.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

interface ItemProps {
  title: string;
  img: string;
  details: string;
  price: number;
}
const Item: React.FC<ItemProps> = ({ title, img, details, price }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [count, setCount] = useState(1);
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content"></p>
    </div>
  );

  const linkName = readMore ? "Read Less  " : "Read More  ";
  const handelIncrement = () => {
    setCount(count + 1);
  };

  const handelDeductment = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleItemClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <div className="product" onClick={handleItemClick}>
                <img className="Img" src={img} alt="P1" width="150px" />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="Name">{title}</h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <p className="price"> ฿ {price}</p>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="font">
        {isPopupVisible && (
          <div className="popup">
            <div className="close">
              <CloseButton onClick={closePopup} />
            </div>
            <div className="popImg">
              <Image src={img} width="250px"></Image>
            </div>
            <div>
              <p className="popName">ชื่อสินค้า : {title}</p>
            </div>
            <div>
              <p className="popPrice">ราคา : ฿ {price}</p>
            </div>
            <div>
              <p className="popDetail" style={{ whiteSpace: "pre-line" }}>
                รายละเอียด {readMore ? details : details.slice(0, 50)}
                {details.length > 50 && (
                  <div className="read">
                    <a
                      className="read-more-link"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      <p className="readMore">{linkName}</p>
                    </a>
                    {readMore && extraContent}
                  </div>
                )}
              </p>
            </div>
            <div className="qty">
              <Button
                variant="light"
                onClick={handelDeductment}
                className="add"
              >
                -
              </Button>
              {count}
              <Button
                variant="light"
                onClick={handelIncrement}
                className="deduct"
              >
                +
              </Button>
              <div className="cart">
                <Button variant="warning">ADD TO CART</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
