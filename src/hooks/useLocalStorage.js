import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialData) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const existData = JSON.parse(localStorage.getItem(key));
    if (existData) {
      setData(existData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    if (typeof newData === "function") {
        localStorage.setItem(key,JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    setData(newData);
  };
  return [data, updateLocalStorage];
};
