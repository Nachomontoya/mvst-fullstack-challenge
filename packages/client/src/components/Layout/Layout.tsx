import React from "react";
import { ChildrenProps } from "../../utils/types";
import Header from "../Header";
import Main from "../Main";

function Layout({ children }: ChildrenProps): React.ReactElement {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
