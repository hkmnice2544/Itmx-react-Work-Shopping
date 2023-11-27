import "./Product.css";
import React, { useState } from "react";
interface ItemProps {
    title: string;
    img:string;
    details:string;
    price: number;
  }
  const Item: React.FC<ItemProps> = ({ title,img, price }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

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
                <img
                  className="Img"
                  src={img}
                  alt="P1"
                  width="150px"
                />
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
                    <p className="price">{price}</p>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {isPopupVisible && (
        <div className="popup">
          <h3>สวัสดี</h3>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
    
  )}
   

export default Item