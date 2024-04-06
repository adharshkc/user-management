import { useEffect, useState } from "react";

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUserData(data?.data);
    } catch (error) {
      console.log(error);
    }
  }
  return userData;
};

export default useUserData;
