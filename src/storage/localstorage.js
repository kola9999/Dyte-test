import { useEffect, useState } from "react";

const constant = "editor-";
// storing the editor content locally.
export default function Localstore(key, initialValue) {
  const totalkey = constant + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(totalkey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(totalkey, JSON.stringify(value));
  }, [totalkey, value]);

  return [value, setValue];
}
