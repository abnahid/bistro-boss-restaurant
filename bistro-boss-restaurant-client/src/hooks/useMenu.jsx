import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/menu")
      .then((response) => {
        setMenu(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false);
      });
  }, [axiosPublic]);

  return [menu, loading];
};

export default useMenu;
