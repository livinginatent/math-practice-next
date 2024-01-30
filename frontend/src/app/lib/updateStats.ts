const updateStats = async () => {
  try {
    const response = await fetch("/api/updateStats", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      // Include any necessary data in the body
      body: JSON.stringify({
        // Your stats data here
      }),
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
export default updateStats