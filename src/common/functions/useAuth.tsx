import { BASE_URL } from "../config/env-variable";

export function useAuth() {

  const checkIsLogged = async () => {
    try {
      const response = await fetch(`${BASE_URL}offers/logged`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (data.error) {
        return { message: "auth failed" };
      } else {
        return { message: "auth success", userId: data.userId };
      }
    } catch (err) {
      console.error(err);
    }
  };

  return checkIsLogged;
}
