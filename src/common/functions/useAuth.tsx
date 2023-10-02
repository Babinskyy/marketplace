import { BASE_URL } from "../config/env-variable";

export function useAuth() {
  const checkIsLogged = async () => {
    try {
      const response = await fetch(`${BASE_URL}users/logged`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (data.error) {
        return { message: "auth failed" };
      } else {
        console.log("useAuthData:", data);
        return {
          success: true,
          message: "auth success",
          userId: data.userId,
          username: data.username,
        };
      }
    } catch (err) {
      console.error(err);
    }
  };

  return checkIsLogged;
}
