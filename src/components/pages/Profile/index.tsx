import Input from "../../form/Input";
import defaultStyles from "../Register/styles.module.css";
import customStyles from "./profile.module.css";
import { ChangeEvent, useState, useEffect, FormEvent, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { User } from "../../../types/User";

const Profile = () => {
  const [user, setUser] = useState({});
  const [placeholder, setPlaceholder] = useState<User | undefined>(undefined);
  const useAuth = useContext(UserContext);
  const { registerUser } = useAuth();
  const baseURL = "http://localhost:3000";
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        };

        const response = await fetch(`${baseURL}/users/validate`, requestOptions);
        const data = await response.json();

        if (data) {
          setPlaceholder(data);
          console.log(placeholder)
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerUser(user);
  };

  return (
    <>
      <section
        className={`${defaultStyles.formWrapper} ${customStyles.editForm}`}
      >
        <h1
          className={`${defaultStyles.formTitle} ${customStyles.editFormTitle}`}
        >
          Edit information
        </h1>
        <p
          className={`${defaultStyles.formSubtitle} ${customStyles.editFormSubTitle}`}
        >
          Fill in the fields you want to edit
        </p>
        <form onSubmit={handleSubmit} className={defaultStyles.form}>
          <Input
            type="text"
            name="name"
            placeholder={placeholder?.name || "Name"}
            handleChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder={placeholder?.email || "Email"}
            handleChange={handleInputChange}
          />
          <Input
            type="text"
            name="phone"
            placeholder={placeholder?.phone || "Phone"}
            handleChange={handleInputChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            handleChange={handleInputChange}
          />
          <Input
            type="password"
            name="confirmedPassword"
            placeholder="Confirm your password"
            handleChange={handleInputChange}
          />
          <button type="submit" className={defaultStyles.submit}>
            Edit
          </button>
        </form>
      </section>
    </>
  );
};

export default Profile;
