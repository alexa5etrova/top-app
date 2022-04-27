import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({ children, appereance }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appereance == "primary",
        [styles.ghost]: appereance == "ghost",
      })}
    >
      {children}
    </button>
  );
};
