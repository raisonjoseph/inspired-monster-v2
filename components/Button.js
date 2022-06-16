import classNames from "classnames";
const Button = ({ children, icon, onClick, disabled, fullwidth }) => {
  return (
    <button
      className={classNames("btn", fullwidth && "btn-full-width")}
      disabled={disabled}
      onClick={onClick ? onClick : undefined}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
