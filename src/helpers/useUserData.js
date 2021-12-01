import axios from "axios";
import { useEffect, useState } from "react";

const useUserData = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [hashMore, setHashMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    (async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_USER_API, {
          headers: {
            "app-id": process.env.REACT_APP_USER_API_TOKEN,
          },
          params: { limit: 10, page: pageNumber },
        });
        console.log(data);
        setUsers((prev) => [...prev, ...data.data]);
        setHashMore(data.data.length === 10);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    })();
  }, [pageNumber]);

  return { loading, error, users, hashMore };
};

export default useUserData;
