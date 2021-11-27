import React from "react";
import { ChildrenProps } from "../../utils/types";

function Main({ children }: ChildrenProps): React.ReactElement {
  return (
    <main className="col-12 mt-auto mb-auto d-flex justify-content-center">
      <div className="d-flex flex-column difference text-light h-110">
        {children}
      </div>
    </main>
  );
}

export default Main;
