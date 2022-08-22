import classNames from "classnames";

const Shimmer = ({ avatar = false, width, height }) => {
  return <div classNames={classNames("shimmer", avatar && "avatar")}></div>;
};

export default Shimmer;
