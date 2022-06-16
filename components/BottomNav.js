import NavItem from "./NavItem";
import HomeInactiveIcon from "../assets/images/home_inactive.svg";
import HomeActiveIcon from "../assets/images/home_active.svg";
import WorkInactiveIcon from "../assets/images/works_inactive.svg";
import WorkActiveIcon from "../assets/images/work_active.svg";
import ContactInactiveIcon from "../assets/images/contact_inactive.svg";
import ContactActiveIcon from "../assets/images/contact_active.svg";
import AboutInactiveIcon from "../assets/images/about_inactive.svg";
import AboutActiveIcon from "../assets/images/about_active.svg";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
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
      <NavItem
        path="/"
        inactiveIcon={AboutInactiveIcon}
        activeIcon={AboutActiveIcon}
      >
        About
      </NavItem>
    </div>
  );
};

export default BottomNav;
