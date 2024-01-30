const updateStats = async (operation: string, finalScore: number) => {
  try {
    const body = JSON.stringify({ operation, finalScore });
    const response = await fetch("/api/updateStats", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error updating stats:", error);
  }
};
export default updateStats;
