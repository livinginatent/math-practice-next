export const getUser = async () => {
  try {
    const response = await fetch("/api/me", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user stats");
    }

    const stats = await response.json();
    return stats;
  } catch (error) {
    console.error("Error fetching user stats:", error);
    // Consider returning an error object or null to indicate failure
    // and handle it in your component or caller.
  }
};
