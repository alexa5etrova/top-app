import { TagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({
  size = "medium",
  color = "primary",
  href,
  className,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size == "small",
        [styles.medium]: size == "medium",
        [styles.ghost]: color == "ghost",
        [styles.green]: color == "green",
        [styles.red]: color == "red",
        [styles.primary]: color == "primary",
        [styles.grey]: color == "grey",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
