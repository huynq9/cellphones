import Header from "./Header";
import { ReactNode } from "react";
import { Nav } from "./Nav";

export const LayOutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-3/12 h-screen ">
          <Nav />
        </div>
        <div className="w-full mt-[7%]">{children}</div>
      </div>
    </div>
  );
};
