import React from "react";
import "./Product.css";
import Item from "./Item";
interface ProductProps {
  searchTerm: string; // Assuming searchTerm is of type string
}

const Product: React.FC<ProductProps> = ({ searchTerm }) => {
  const data = [
    {
      id: 1,
      img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120023931_c_Midst_WT.JPG&w=828&q=75",
      title: "ตู้วางทีวี รุ่นมิสท์",
      details:
        "\nรหัสสินค้า : midst-tvcabinet\nแบรนด์ : WINNER FURNITURE\nวัสดุการผลิต : ไม้พาร์ทิเคิลบอร์ดปิดผิวเมลามีน\nขนาดสินค้า : ขนาด 120 ซม. : 120 x 41.3 x 61 ซม.\nขนาด 150 ซม. : 150 x 41.3 x 61 ซม.\nขนาด 180 ซม. : 180 x 41.3 x 61 ซม.",
      price: 1990,
    },
    {
      id: 2,
      img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120017698_1526466084324HbWL_1.jpg&w=828&q=75",
      title: "ตู้เตี้ย 4 ลิ้นชัก รุ่นแม็กซ์",
      details: "ผลิตจากไม้พาร์ทิเคิลเกรดสูง (E1) ปิดผิวเมลามีน หรือปิดผิวฟอยล์",
      price: 2790,
    },
    {
      id: 3,
      img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120023435_1628579610846aHGA.jpg&w=1920&q=75",
      title: "ตู้เสื้อผ้า 3 บาน รุ่นวีโว่",
      details:
        "ตู้เสื้อผ้าดีไซน์เรียบง่าย ราคาย่อมเยา ตอบโจทย์ความต้องการในห้องนอนของคุณ",
      price: 3890,
    },
    {
      id: 4,
      img: "https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F2%2F120024027_1655780622841GDTo.jpg&w=828&q=75",
      title: "ตู้โชว์กระจก รุ่นกลอรี่",
      details:
        "โครงตู้ผลิตจากเหล็กชุบโครเมี่ยม กระจกทั้งตู้เป็นกระจกนิรภัย เพื่อความปลอดภัยของผู้ใช้งาน",
      price: 2490,
    },
  ];
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.details.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h3 className="title">PRODUCT</h3>

      <div>
        <table align="center">
          <tbody>
            {filteredData.map(
              (element, index) =>
                index % 2 === 0 && (
                  <tr key={index}>
                    <td>
                      <Item {...element} />
                    </td>
                    {index + 1 < filteredData.length && (
                      <td>
                        <Item {...filteredData[index + 1]} />
                      </td>
                    )}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
