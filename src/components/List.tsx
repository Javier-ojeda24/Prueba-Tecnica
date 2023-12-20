import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../App.module.css";
import { Nav } from "./Nav";

interface data {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

export const List = () => {
  const [data, setData] = useState<data[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const getApi = async () => {
    try {
      const res = await axios.get(
        "https://6172cfe5110a740017222e2b.mockapi.io/elements"
      );
      setData(res.data);
      setIsLoading(false);
    } catch (err) {
      setError('Error fetching data');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1 data-testid="error">{error}</h1>;
  }

  return (
    <>
      <Nav />
      {data &&
        data.map((item, index) => {
          return (
            <div className={styles.contenedorList} key={index}>
              <div className={styles.contenedorImg}>
                <img src={item.avatar} alt="img/avatar" />
                <h2>{item.name}</h2>
              </div>
            </div>
          );
        })}
    </>
  );
};
