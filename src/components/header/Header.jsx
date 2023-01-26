import logo from "../../../public/images/logo.svg";
import menu from "../../../public/images/icon-menu.svg";
import cart from "../../../public/images/icon-cart.svg";
import avatar from "../../../public/images/image-avatar.png";

import s from "./header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header_left}>
        <div className="burgerMenu">
          <img className={s.menu} src={menu} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={s.header_right}>
        <div className="cart">
          <img src={cart} alt="cart" />
        </div>
        <div className="profile">
          <img className={s.avatar} src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
