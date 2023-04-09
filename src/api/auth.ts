import { useNavigate } from "react-router-dom";
import { signInType, signUpType } from "../Schemas/auth";
import { instance } from "./instance";
export const signIn = async (data: signInType) => {
  return new Promise<void>(async (resolve, reject) => {
    await instance.post("/signin", data).then(({ data }) => {
      localStorage.setItem("user", JSON.stringify(data));
      resolve(data);
    });
  });
};

// export const logOut = async () => {
//   await instance.post("/logout");
//   localStorage.removeItem("accessToken");
//   const navigate = useNavigate();
//   navigate("/");
// };
export const signUp = async (data: signUpType) => {
  await instance.post("/signup", data);
};
