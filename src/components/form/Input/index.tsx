import customStyles from "./input.module.css";
interface InputProps {
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  name: string;
  value?: string | number;
  images?: boolean;
}

const Input = ({ type, placeholder, name, value, images }: InputProps) => {
  return (
    <input className={customStyles.input}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      multiple={images}
    />
  );
};

export default Input;
