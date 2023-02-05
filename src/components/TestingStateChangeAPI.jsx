import { useState, useEffect } from "react";
import { FetchData } from "../utils/Services";

export const TestingStateChangeAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
