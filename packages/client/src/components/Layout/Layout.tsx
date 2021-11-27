import React from "react";
import { useSelector } from "react-redux";
import { ChildrenProps, RootState } from "../../utils/types";
import Header from "../Header";
import Main from "../Main";

function Layout({ children }: ChildrenProps): React.ReactElement {
  const {
    mode: { isDark },
  } = useSelector((state: RootState) => state);

  return (
    <div
      className={`p-4 w-100 vh-100 d-flex flex-column ${isDark && "bg-dark"}`}
    >
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;
