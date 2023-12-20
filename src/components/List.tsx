import React, { useEffect, useState } from "react";
import axios from "axios";

export const List = () => {
  const [data, setData] = useState();
  const getApi = async () => {
    const res = await axios.get(
      "https://6172cfe5110a740017222e2b.mockapi.io/elements"
    );

    setData(res.data);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
            </div>
          );
        })}
    </>
  );
};
