import { ParagraghProps } from "./Paragragh.props";
import cn from "classnames";
import styles from "./Paragragh.module.css";

export const Paragragh = ({
  size = "medium",
  className,
  children,
  ...props
}: ParagraghProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragragh, className, {
        [styles.small]: size == "small",
        [styles.medium]: size == "medium",
        [styles.big]: size == "big",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
