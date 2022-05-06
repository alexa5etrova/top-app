import { LayoutProps } from "./Layout.props";
import cn from "classnames";
import styles from "./Layout.module.css";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
