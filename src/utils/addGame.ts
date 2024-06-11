import useFlashMessage from "../hooks/useFlashMessage";

const addGame = async (formData: FormData) => {
    const {setFlashMessage} = useFlashMessage()
    const baseURL = "http://localhost:3000";
    const token = localStorage.getItem("token");
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };
      
      const response = await fetch(`${baseURL}/games/create`, requestOptions);
      const data = await response.json();
      if(response.status !== 201){
        setFlashMessage(data.message, "error");
        return
      }
      setFlashMessage(data.message, "success");
    } catch (error) {
      setFlashMessage("Error submitting form", "error");
    }
  };

export default addGame
  