import { ChangeEvent, FormEvent, useContext, useState } from "react";
import customStyles from "../Register/styles.module.css"
import imageSrc from "../../../images/controlbg.jpg"
import Input from "../../form/Input";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

const Login = () => {
    const [user, setUser] = useState({});
    const useAuth = useContext(UserContext)
    const {login} = useAuth()
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const handleSubimit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        login(user)
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
                type="email"
                name="email"
                placeholder="Email"
                handleChange={handleInputChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                handleChange={handleInputChange}
              />
              <button type="submit" className={customStyles.submit}>
                Login
              </button>
            </form>
            <p className={customStyles.login}>
              Not have an account? <Link to={"/register"}>Click here</Link>
            </p>
          </section>
        </>
      );
}

export default Login
