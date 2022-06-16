import classNames from "classnames";
import Image from "next/image";

import Logo from "../assets/images/logo.png";
import HomeInactiveIcon from "../assets/images/home_inactive.svg";
import HomeActiveIcon from "../assets/images/home_active.svg";
import WorkInactiveIcon from "../assets/images/works_inactive.svg";
import WorkActiveIcon from "../assets/images/work_active.svg";
import ContactInactiveIcon from "../assets/images/contact_inactive.svg";
import ContactActiveIcon from "../assets/images/contact_active.svg";
import AboutInactiveIcon from "../assets/images/about_inactive.svg";
import AboutActiveIcon from "../assets/images/about_active.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import DribbleIcon from "../assets/images/dribble.svg";
import NavItem from "./NavItem";
import SocialItem from "./SocialItem";

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Image className="icon" src={Logo} alt="logo" />
        </div>
        <div className="social-elements">
          <SocialItem path="" icon={DribbleIcon} />
          <SocialItem path="" icon={TwitterIcon} />
          <SocialItem path="" icon={LinkedinIcon} />
          <SocialItem path="" icon={InstagramIcon} />
        </div>
        <div className="nav-items">
          <NavItem
            path="/"
            inactiveIcon={HomeInactiveIcon}
            activeIcon={HomeActiveIcon}
            active
          >
            Home
          </NavItem>
          <NavItem
            path="/"
            inactiveIcon={AboutInactiveIcon}
            activeIcon={AboutActiveIcon}
          >
            About me
          </NavItem>
          <NavItem
            path="/"
            inactiveIcon={WorkInactiveIcon}
            activeIcon={WorkActiveIcon}
          >
            Works
          </NavItem>
          <NavItem
            path="/"
            inactiveIcon={ContactInactiveIcon}
            activeIcon={ContactActiveIcon}
          >
            Contact
          </NavItem>
        </div>
      </div>
    </header>
  );
};

export default Header;
