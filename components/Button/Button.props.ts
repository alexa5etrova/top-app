import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  appereance: "primary" | "ghost";
}
