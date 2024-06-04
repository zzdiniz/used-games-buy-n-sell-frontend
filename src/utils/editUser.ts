import useFlashMessage from "../hooks/useFlashMessage";

const editUser = async (formData: FormData) => {
    const {setFlashMessage} = useFlashMessage()
    const baseURL = "http://localhost:3000";
    const token = localStorage.getItem("token");
    try {
      const requestOptions = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };
      
      const response = await fetch(`${baseURL}/users/edit`, requestOptions);
      const data = await response.json();
      
      setFlashMessage(data.message, "success");
    } catch (error) {
      setFlashMessage("Error submitting form", "error");
    }
  };

export default editUser
  