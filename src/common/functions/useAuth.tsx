export function useAuth() {
  const url = "http://localhost:8000/";

  const checkIsLogged = async () => {
    try {
      const response = await fetch(`${url}offers/logged`, {
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
