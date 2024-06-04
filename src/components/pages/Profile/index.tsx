import Input from "../../form/Input";
import defaultStyles from "../Register/styles.module.css";
import customStyles from "./profile.module.css";
import { ChangeEvent, useState, useEffect, FormEvent } from "react";
import { User } from "../../../types/User";
import getUser from "../../../utils/getUser";
import editUser from "../../../utils/editUser";

const Profile = () => {
  const [user, setUser] = useState({});
  const [placeholder, setPlaceholder] = useState<Partial<User> | undefined>(undefined);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUser();
        setPlaceholder(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.files?.[0] });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    const userData = user as User;

    Object.entries(userData).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    await editUser(formData);
  };

  return (
    <section className={`${defaultStyles.formWrapper} ${customStyles.editForm}`}>
      <h1 className={`${defaultStyles.formTitle} ${customStyles.editFormTitle}`}>
        Edit information
      </h1>
      <p className={`${defaultStyles.formSubtitle} ${customStyles.editFormSubTitle}`}>
        Fill in the fields you want to edit
      </p>
      <form onSubmit={handleSubmit} className={defaultStyles.form}>
        <Input type="file" name="image" handleChange={handleFileChange} />
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
  );
};

export default Profile;
