import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const navigate = useNavigate();
  const url = "http://localhost:8000/";

  const [authStatus, setAuthStatus] = useState<{ message: string } | null>(
    null
  );

  useEffect(() => {
    const checkIsLogged = async () => {
      try {
        const response = await fetch(`${url}offers/logged`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (data.error) {
          setAuthStatus({ message: "auth failed" });
        } else {
          setAuthStatus({ message: "auth success" });
        }
      } catch (err) {
        console.error(err);
        setAuthStatus({ message: "auth error" });
      }
    };

    checkIsLogged();
  }, [navigate, url]);

  return authStatus; // Return the authentication status
}
