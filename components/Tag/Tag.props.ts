import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "small" | "medium";
  color: "ghost" | "red" | "green" | "grey" | "primary";
  children: ReactNode;
  href?: string;
}
