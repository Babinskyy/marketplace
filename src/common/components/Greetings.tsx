import React, { useEffect, useState } from "react";
import { useAuth } from "../functions/useAuth";
import useCapitalizeFirstChar from "../functions/useCapitalizeFirstChar";

type GreetingsProps = {
  darkTheme: boolean;
};

const Greetings = (props: GreetingsProps) => {
  const checkIsLogged = useAuth();
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const checkLogStatus = async () => {
      const result = await checkIsLogged();
      if (result?.message === "auth success") {
        setUsername(result.username);
      }
    };
    checkLogStatus();
  }, [checkIsLogged]);

  return (
    <div className="greetings-container">
      <h1
        className={` ${props.darkTheme && "dark-theme"}
        ${!username && "logged-out"}`}
      >
        {username && "Hello"} {useCapitalizeFirstChar(username)}
        {username && "!"}
      </h1>
    </div>
  );
};

export default Greetings;
