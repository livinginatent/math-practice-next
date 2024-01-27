import { useEffect, useState } from "react";

export const useGetUser = () => {
  const [user,setUser] = useState(null)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/users/me", {});
        const jsonData = await response.json();
        setUser(jsonData)
      } catch (error) {
      } finally {
      }
    };

    fetchUserData();
  }, []);
  return {user}
};
