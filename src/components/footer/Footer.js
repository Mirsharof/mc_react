import React from 'react';
import './footer.css'
import ImgFooter from '../../images/img/f2.jpg'
function Footer() {
    return (
        <div>
            <div class="container">
  <div class="avatar">
    <a href="#">
      <img src={ImgFooter} alt="Mirsharof" />
    </a>
  </div>
  <div class="content">
    <h1>Ms_Shoff</h1>
    <p>Doim xizmatdamiz:+998995573870</p>
    <p>
      <span><a href="#"><i class="fa fa-twitter"></i></a></span>
      <span><a href="#"><i class="fa fa-github"></i></a></span>
      <span><a href="#" ><i class="fa fa-bitbucket"></i></a></span>
      <span><a href="#" ><i class="fa fa-codepen"></i></a></span>
    </p>
    <p>Tuzuvchi: Mirsharof</p>
  </div>
</div>

{/* <a class="suppoprt-me" href="https://www.buymeacoffee.com/marioduarte" ><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a Coffee&nbsp&emoji=&slug=marioduarte&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"/></a> */}
        </div>
    );
}

export default Footer;
