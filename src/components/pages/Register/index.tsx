import Input from "../../form/Input";
import customStyles from "./styles.module.css";
import imageSrc from "../../../images/controlbg.jpg";
import { Link } from "react-router-dom";
import { ChangeEvent, useState,FormEvent } from "react";
const Register = () => {
  const [user, setUser] = useState({});
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubimit = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(user)
  }
  return (
    <>
      <img src={imageSrc} alt="Controller Background" />
      <section className={customStyles.formWrapper}>
        <h1 className={customStyles.formTitle}>Used Games Buy & Sell </h1>
        <p className={customStyles.formSubtitle}>
          Where adventures find new players and old favorites return to the
          limelight, fostering a community of shared experiences and timeless
          treasures.
        </p>
        <form onSubmit={handleSubimit} className={customStyles.form}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            handleChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            handleChange={handleInputChange}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone"
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
          <button type="submit" className={customStyles.submit}>
            Register
          </button>
        </form>
        <p className={customStyles.login}>
          Already have an account? <Link to={"/login"}>Click here</Link>
        </p>
      </section>
    </>
  );
};

export default Register;
