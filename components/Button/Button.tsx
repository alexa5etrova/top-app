import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  children,
  arrow = "none",
  appereance,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appereance == "primary",
        [styles.ghost]: appereance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.arrowDown]: arrow == "down",
            [styles.arrowRight]: arrow == "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
