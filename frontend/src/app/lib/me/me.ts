export const getUser = async () => {
  try {
    const response = await fetch("/api/me", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user stats");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user user:", error);
    
  }
};
