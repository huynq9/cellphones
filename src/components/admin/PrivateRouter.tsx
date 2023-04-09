import { useNavigate } from "react-router-dom";
import { LayOutAdmin } from "../admin/Layout";

import { ReactNode, useEffect, useState } from "react";

export const PrivateRouter = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") as string);
  useEffect(() => {
    // Kiểm tra role của người dùng trong localStorage
    if (user && user.user.role !== "admin") {
      console.log(user.user.role);
      alert("Bạn không có quyền thực hiện hành động này");
      navigate("/");
    } else {
      setIsAuthorized(true);
    }
  }, [navigate, user]);
  if (!isAuthorized) {
    return null;
  }
  return (
    <div>
      {user && user.user.role === "admin" && (
        <LayOutAdmin>{children}</LayOutAdmin>
      )}
    </div>
  );
};
