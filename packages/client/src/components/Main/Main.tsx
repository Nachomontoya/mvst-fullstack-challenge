import React from "react";
import { ChildrenProps } from "../../utils/types";

function Main({ children }: ChildrenProps): React.ReactElement {
  return (
    <main className="col-12 mt-auto mb-auto d-flex justify-content-center">
      {children}
    </main>
  );
}

export default Main;
