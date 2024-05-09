import { ChangeEvent } from "react";
import customStyles from "./input.module.css";
interface InputProps {
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  name: string;
  value?: string | number;
  images?: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, name, value, images, handleChange }: InputProps) => {
  return (
    <input
      className={customStyles.input}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      multiple={images}
      onChange={handleChange}
    />
  );
};

export default Input;
