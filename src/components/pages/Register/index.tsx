import Input from "../../form/Input";
import customStyles from "./styles.module.css"
import imageSrc from "../../../images/controlbg.jpg"
const Register = () => {
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
      <form action="" className={customStyles.form}>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="text" name="phone" placeholder="Phone" />
        <Input type="password" name="password" placeholder="Password" />
        <Input
          type="password"
          name="confirmedPassword"
          placeholder="Confirm your password"
        />
        <button type="submit" className={customStyles.submit}>Register</button>
      </form>
    </section>
    </>
  );
};

export default Register;
