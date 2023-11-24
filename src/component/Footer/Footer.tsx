import React from 'react';
import './Footer.css';

const Footer = () =>{
    return (
     <nav className='footer'>
       <div className='logo'>
         <img className='img-footer' src="https://media.indexlivingmall.com/media/wysiwyg/index-furniture/logo-index-furniture.png" alt="itmx" width='400px' />
       </div>
 
       <div className='aboutus'>
         <h3>About Us</h3>
         <p>Find the Perfect Furniture for Your Home with Our Huge Selection of Products! We Have a Wide Variety of High-quality Furniture at Affordable Prices. Order Online Today!</p>
       </div>
 
       <div className='contactus'>
         <h3>Contact Us</h3>
         <table align='center'>
           <tbody>
             <tr>
               <td><a href="https://page.line.me/jcn4954c?openQrModal=true"><img src="https://cdn-icons-png.flaticon.com/256/3670/3670089.png" alt="Line" width="40ox" /></a></td>
               <td><a href="https://web.facebook.com/Indexlivingmall/"><img src="https://cdn-icons-png.flaticon.com/256/4494/4494475.png" alt="Facebook" width="40ox" /></a></td>
               <td><a href="https://www.instagram.com/indexlivingmall/"><img src="https://cdn-icons-png.flaticon.com/256/4494/4494488.png" alt="Instagram" width="40ox" /></a></td>
               <td><a href="https://www.youtube.com/user/indexfurniture"><img src="https://cdn-icons-png.flaticon.com/256/4494/4494485.png" alt="Youtube" width="40ox" /></a></td>
               <td><a href="https://twitter.com/Indexlivingmall"><img src="https://cdn-icons-png.flaticon.com/256/4494/4494477.png" alt="Twitter" width="40ox" /></a></td>
             </tr>
           </tbody>
         </table>
       </div>
     </nav>
 ) 
 }

export default Footer;