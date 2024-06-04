
const getUser = async () => {
    const baseURL = "http://localhost:3000";
    const token = localStorage.getItem("token");
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await fetch(`${baseURL}/users/validate`, requestOptions);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  export default getUser
