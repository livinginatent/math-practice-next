const updateUser = async (
  username: string,
  email: string | null | undefined
) => {
  try {
    const body = { username, email }; // Directly create the object

    const response = await fetch("/api/updateUser", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // Stringify only when necessary for clarity
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default updateUser;
