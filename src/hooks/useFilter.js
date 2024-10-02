import { useState } from "react";

export const useFilter = (dataList, callBack) => {
  const [query, setQuery] = useState("");
  //console.log(dataList);
  const filterdData = dataList.filter((item) =>
      callBack(item).toLowerCase().includes(query)
  );
  return [filterdData, setQuery];
};
