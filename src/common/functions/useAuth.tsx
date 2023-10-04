import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/env-variable";

export function useAuth() {
  const isLogged = () => {
    const logged = localStorage.getItem("user") ? true : false;
    return logged;
  };

  // const checkIsLogged = async () => {
  //   try {
  //     const response = await fetch(`${BASE_URL}users/logged`, {
  //       method: "GET",
  //       credentials: "include",
  //     });

  //     if (response.status === 401) {
  //       // navigate("/auth");
  //     }

  //     const data = await response.json();

  //     if (data.error) {
  //       return { message: "auth failed" };
  //     } else {
  //       return {
  //         success: true,
  //         message: "auth success",
  //         userId: data.userId,
  //         username: data.username,
  //       };
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return { isLogged };
}
