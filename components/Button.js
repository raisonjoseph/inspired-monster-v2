import classNames from "classnames";
import Image from "next/image";
const Button = ({ children, icon, onClick, disabled, fullwidth }) => {
  return (
    <button
      className={classNames("btn", fullwidth && "btn-full-width")}
      disabled={disabled}
      onClick={onClick ? onClick : undefined}
    >
      {icon && (
        <span className="icon prepend whatsapp">
          <Image className="icon" src={icon} alt="nav" />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
