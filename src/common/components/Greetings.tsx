import React, { useEffect, useState } from "react";
import { useAuth } from "../functions/useAuth";
import useCapitalizeFirstChar from "../functions/useCapitalizeFirstChar";

type GreetingsProps = {
  darkTheme: boolean;
};

const Greetings = (props: GreetingsProps) => {
  const [username, setUsername] = useState<string>("");
  useEffect(() => {
    const storageUserJSON = localStorage.getItem("user");

    if (storageUserJSON) {
      const storageUser = JSON.parse(storageUserJSON);
      setUsername(storageUser.username);
    }
  }, []);

  return (
    <div className="greetings-container">
      <h1 className={`${!username && "logged-out"}`}>
        {username && "Hello"} {useCapitalizeFirstChar(username)}
        {username && "!"}
      </h1>
    </div>
  );
};

export default Greetings;
