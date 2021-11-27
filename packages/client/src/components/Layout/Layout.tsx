import React from "react";
import { ChildrenProps } from "../../utils/types";
import Header from "../Header";
import Main from "../Main";

function Layout({ children }: ChildrenProps): React.ReactElement {
  return (
    <div className={`p-4 w-100 min-vh-100 d-flex flex-column`}>
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;
