import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraghProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "small" | "medium" | "big";
  children: ReactNode;
}
