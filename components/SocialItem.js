import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const SocialItem = ({ path, icon }) => {
  return (
    <Link href={path} target="_blank" rel="noreferrer">
      <div className="social">
        <Image className="icon" src={icon} alt="nav" />
      </div>
    </Link>
  );
};

export default SocialItem;
