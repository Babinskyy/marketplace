import { useState, useEffect } from "react";

function useCapitalizeFirstChar(string: string) {
  const [capitalizedString, setCapitalizedString] = useState("");

  useEffect(() => {
    if (typeof string === "string" && string.length > 0) {
      const firstLetter = string.charAt(0).toUpperCase();
      const restOfString = string.slice(1);
      setCapitalizedString(`${firstLetter}${restOfString}`);
    } else {
      setCapitalizedString("");
    }
  }, [string]);

  return capitalizedString;
}

export default useCapitalizeFirstChar;
